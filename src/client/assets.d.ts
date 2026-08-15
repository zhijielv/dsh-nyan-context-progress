/** esbuild inlines .png imports as data URLs (--loader:.png=dataurl). */
declare module '*.png' {
  const src: string
  export default src
}
