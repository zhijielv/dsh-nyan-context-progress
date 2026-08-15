/** esbuild inlines .png/.svg imports as data URLs (--loader:.png=dataurl --loader:.svg=dataurl). */
declare module '*.png' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}
