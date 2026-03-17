/**
 * Thin wrapper around @nuxtjs/i18n composables.
 * Use this throughout the app so imports stay consistent
 * and any future i18n changes are centralised here.
 */
export function useI18nLocale() {
  const { locale, locales, setLocale, t } = useI18n()
  const localePath = useLocalePath()
  const switchLocalePath = useSwitchLocalePath()

  return {
    locale,
    locales,
    setLocale,
    t,
    localePath,
    switchLocalePath,
  }
}
