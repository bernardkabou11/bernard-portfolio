export const themeOptions = [
  { id: 'dark', label: 'Dark' },
  { id: 'orange', label: 'Orange' },
  { id: 'green', label: 'Green' },
] as const

export const useTheme = () => {
  const theme = useCookie<string>('portfolio-theme', {
    default: () => 'dark',
    sameSite: 'lax',
    secure: false,
    maxAge: 60 * 60 * 24 * 365,
  })

  const applyTheme = (value: string) => {
    const validTheme = themeOptions.some((option) => option.id === value) ? value : 'dark'
    const root = document.documentElement

    root.classList.remove('theme-light', 'theme-sensara', 'theme-minimal', ...themeOptions.map((option) => `theme-${option.id}`))
    root.classList.add(`theme-${validTheme}`)
    root.setAttribute('data-theme', validTheme)
    root.style.colorScheme = 'dark'
    theme.value = validTheme
  }

  onMounted(() => {
    applyTheme(theme.value || 'dark')
  })

  watch(
    theme,
    (value) => {
      if (import.meta.client) {
        applyTheme(value || 'dark')
      }
    },
    { immediate: true },
  )

  const setTheme = (value: string) => {
    if (themeOptions.some((option) => option.id === value)) {
      applyTheme(value)
    }
  }

  return {
    theme,
    themeOptions,
    setTheme,
    currentTheme: computed(() => theme.value || 'dark'),
  }
}
