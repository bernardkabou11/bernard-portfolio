export const themeOptions = [
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
  { id: 'sensara', label: 'Sensara' },
  { id: 'devops', label: 'DevOps' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'orange', label: 'Orange' },
  { id: 'green', label: 'Green' },
]

export const useTheme = () => {
  const theme = useCookie('portfolio-theme', {
    default: () => 'dark',
    sameSite: 'lax',
    secure: false,
    maxAge: 60 * 60 * 24 * 365,
  })

  const applyTheme = (value) => {
    const validTheme = themeOptions.some((option) => option.id === value) ? value : 'dark'
    const root = document.documentElement

    root.classList.remove(...themeOptions.map((option) => `theme-${option.id}`))
    root.classList.add(`theme-${validTheme}`)
    root.setAttribute('data-theme', validTheme)
    root.style.colorScheme = ['light', 'minimal'].includes(validTheme) ? 'light' : 'dark'
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

  const setTheme = (value) => {
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
