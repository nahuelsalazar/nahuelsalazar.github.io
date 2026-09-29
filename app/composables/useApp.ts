export function useApp() {
  const isMobileMenuOpen = useState<boolean>("isMobileOpen", () => false);

  const toggleSidebar = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };

  return {
    isMobileMenuOpen,
    toggleSidebar,
  };
}
