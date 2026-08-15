/**
 * Build the out-of-tree dsh client plugin bundle.
 *
 * The artifact follows the official dsh client bundle contract:
 * a CJS classic script whose banner hands the module to the shell loader —
 *
 *   window.__ModuleLoader__.load({ id: "<package-name>", factory: (require) => { ... } })
 *
 * Platform modules (react, react/jsx-runtime, @deepseek-ai/dsh-client-runtime/client,
 * @deepseek-ai/dsh-client-ui-slots, ...) are external so the factory's injected
 * `require` resolves them from the shell's frozen module table. This script also
 * writes the no-op node half (lib/index.js) that the host Loader mounts as the
 * cordis entry.
 *
 * esbuild resolution: a local install first, then the harness repo's .pnpm cache
 * (this machine's store), so the build works with no network and no harness edits.
 */
import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const { name: BUNDLE_ID } = JSON.parse(readFileSync(join(HERE, 'package.json'), 'utf8'))

/** The shell's frozen platform module table (same list as the official tsdown client preset). */
const PLATFORM_EXTERNALS = [
  'react',
  'react/jsx-runtime',
  'react-dom',
  'react-dom/client',
  '@deepseek-ai/cordis',
  '@deepseek-ai/dsh-client-ui-slots',
  '@deepseek-ai/dsh-client-web-react',
  '@deepseek-ai/dsh-client-ui-primitives',
  '@deepseek-ai/dsh-client-ui-attachment',
  '@deepseek-ai/dsh-client-schema-form',
  '@deepseek-ai/dsh-client-runtime/client',
]

/** The esbuild binary to invoke: local install, else the harness .pnpm cache, else fail. */
function resolveEsbuild() {
  const local = join(HERE, 'node_modules', 'esbuild', 'bin', 'esbuild')
  if (existsSync(local)) return { bin: ['node', local] }
  const repoRoot = join(HERE, '..', '..', 'deepseek-harness')
  const repoPnpm = join(repoRoot, 'node_modules', '.pnpm', 'esbuild@0.25.12', 'node_modules', 'esbuild', 'bin', 'esbuild')
  if (existsSync(repoPnpm)) return { bin: ['node', repoPnpm] }
  throw new Error(
    'esbuild not found: run `pnpm add -D esbuild` in this directory, or restore '
    + `the harness at ${repoRoot} (whose .pnpm cache is used as a fallback)`,
  )
}

// esbuild supports --banner/--footer (no intro), so the CJS scaffolding folds
// into the banner AFTER the factory opener — the module/exports variables must
// be local to each factory, never top-level globals in the classic script.
const banner = [
  `window.__ModuleLoader__.load({ id: ${JSON.stringify(BUNDLE_ID)}, factory: (require) => {`,
  'var module = { exports: {} }; var exports = module.exports;',
].join('\n')
const footer = 'return module.exports; } });'

const { bin } = resolveEsbuild()
const args = [
  join(HERE, 'src', 'client', 'index.tsx'),
  '--bundle',
  '--format=cjs',
  '--platform=browser',
  '--target=es2022',
  '--jsx=automatic',
  '--loader:.png=dataurl',
  '--loader:.svg=dataurl',
  `--outfile=${join(HERE, 'lib', 'client.js')}`,
  ...PLATFORM_EXTERNALS.flatMap(spec => [`--external:${spec}`]),
  `--banner:js=${banner}`,
  `--footer:js=${footer}`,
]
const result = spawnSync(bin[0], [...bin.slice(1), ...args], { cwd: HERE, stdio: 'inherit', encoding: 'utf8' })
if (result.status !== 0) process.exit(result.status ?? 1)

writeFileSync(join(HERE, 'lib', 'index.js'), [
  '// Node half of dsh-nyan-context-progress: the host Loader mounts this module as a',
  '// cordis entry. All behavior lives in the browser half (exports["./client"]',
  '// -> lib/client.js).',
  'export function apply() {}',
  '',
].join('\n'))
console.log('built lib/client.js and lib/index.js')
