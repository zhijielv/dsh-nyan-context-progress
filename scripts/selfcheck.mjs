/**
 * Keyless self-test of the built client bundle, run in plain Node.
 *
 * Evaluates lib/client.js with a stub window.__ModuleLoader__ and a stub
 * require (react / react/jsx-runtime are external — their values come from the
 * shell's module table at runtime), then asserts the cordis entry contract that
 * the browser kernel depends on:
 *
 *   1. the bundle calls __ModuleLoader__.load exactly once;
 *   2. the id equals the package name;
 *   3. the CJS module/exports scaffolding is scoped INSIDE the factory
 *      (the official tsdown client preset places it after the factory opener);
 *   4. materializing the factory yields named exports apply + inject;
 *   5. apply(ctx) registers exactly one contribution into 'shell.overlay'
 *      with id 'context-progress' and a component function.
 */
import vm from 'node:vm'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const HERE = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)
const { name: BUNDLE_ID } = JSON.parse(readFileSync(join(HERE, '..', 'package.json'), 'utf8'))

const bundleSource = readFileSync(join(HERE, '..', 'lib', 'client.js'), 'utf8')

// The CJS scaffolding must be local to the factory, not a top-level global in
// the classic script. The factory opener must precede the var module line.
const factoryOpener = bundleSource.indexOf('factory: (require) => {')
const moduleScaffolding = bundleSource.indexOf('var module = { exports: {} }; var exports = module.exports;')
if (factoryOpener === -1 || moduleScaffolding === -1 || moduleScaffolding < factoryOpener) {
  throw new Error(
    'selfcheck: bundle scaffolding is not scoped inside the factory — '
    + 'build.mjs must put `var module...` after `window.__ModuleLoader__.load({ ... factory: (require) => {`',
  )
}

let handed
let loadCount = 0
const loader = {
  load(entry) {
    loadCount += 1
    handed = entry
  },
}
const context = vm.createContext({ window: { __ModuleLoader__: loader }, console })
vm.runInContext(bundleSource, context)

if (loadCount !== 1) {
  throw new Error(`selfcheck: expected exactly one __ModuleLoader__.load call, got ${loadCount}`)
}
if (handed.id !== BUNDLE_ID) {
  throw new Error(`selfcheck: bundle id ${handed.id} !== package name ${BUNDLE_ID}`)
}
if (typeof handed.factory !== 'function') {
  throw new Error('selfcheck: loaded entry has no factory')
}

// The plugin should have no runtime imports from platform modules other than
// react/jsx-runtime; type-only dsh imports are erased by esbuild.
const stubRequire = (spec) => {
  if (spec === 'react') return { createElement: () => null }
  if (spec === 'react/jsx-runtime') return { jsx: () => null, jsxs: () => null }
  throw new Error(`selfcheck: unexpected external require: ${spec}`)
}

const entry = handed.factory(stubRequire)
if (typeof entry.apply !== 'function' || !Array.isArray(entry.inject)) {
  throw new Error(`selfcheck: bundle exports must include apply and inject, got ${Object.keys(entry ?? {})}`)
}
if (!entry.inject.includes('slots') || !entry.inject.includes('sessions')) {
  throw new Error(`selfcheck: inject must include slots and sessions, got ${JSON.stringify(entry.inject)}`)
}

const contributions = []
const registrations = []
const slots = {
  inject(slotName, fn) { contributions.push({ slotName, fn }) },
  register(options, component) { registrations.push({ options, component }); return () => {} },
}
entry.apply({ slots })

if (contributions.length !== 1) {
  throw new Error(`selfcheck: apply() should make one slot contribution, got ${contributions.length}`)
}
const { slotName, fn } = contributions[0]
if (slotName !== 'shell.overlay') {
  throw new Error(`selfcheck: contribution targets ${slotName}, expected shell.overlay`)
}

fn()
if (registrations.length !== 1) {
  throw new Error(`selfcheck: register() should run once, ran ${registrations.length} times`)
}
const { options, component } = registrations[0]
if (options.name !== 'shell.overlay' || options.id !== 'context-progress') {
  throw new Error(`selfcheck: register name/id mismatch, got ${JSON.stringify(options)}`)
}
if (typeof component !== 'function') {
  throw new Error('selfcheck: register() must receive a component function')
}

console.log(`selfcheck OK: ${handed.id} exports apply/inject; registers shell.overlay id=${options.id} with a component`)
