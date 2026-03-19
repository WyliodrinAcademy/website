/**
 * Returns a helper that resolves a public-asset path against the app base URL.
 * Needed for GitHub Pages project pages where NUXT_APP_BASE_URL = /website/.
 *
 * Usage:
 *   const asset = usePublicUrl()
 *   asset('/images/experts/foo.png')  // → '/website/images/experts/foo.png'
 */
export function usePublicUrl() {
  const { app } = useRuntimeConfig()
  // app.baseURL ends with '/', path starts with '/' — strip one slash
  return (path: string) => `${app.baseURL}${path.replace(/^\//, '')}`
}
