export function useTheme() {
  // useCookie gestiona la cookie automáticamente en el servidor y en el navegador.
  // Le damos 1 año de expiración para que no se borre al cerrar el navegador.
  const theme = useCookie<"light" | "dark">("theme-mode", {
    default: () => "dark",
    watch: true,
    maxAge: 60 * 60 * 24 * 365,
  });

  const isDark = computed(() => theme.value === "dark");

  const toggleDarkMode = () => {
    theme.value = isDark.value ? "light" : "dark";
  };

  return { isDark, toggleDarkMode };
}
