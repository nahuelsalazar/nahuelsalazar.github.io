<template>
  <!-- NAV BAR -->
  <header
    class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 transition-colors"
  >
    <div
      class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative"
    >
      <!-- BOTÓN HAMBURGUESA (Solo visible en móvil) -->
      <button
        @click="toggleSidebar"
        class="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
        aria-label="Abrir menú de navegación"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- LOGO (Centrado en móvil, a la izquierda en desktop) -->
      <a
        href="#hero"
        class="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
      >
        &lt;DevPortfolio /&gt;
      </a>

      <!-- LINKS NAVEGACIÓN DESKTOP -->
      <nav class="hidden md:flex items-center space-x-8 text-sm font-medium">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- BOTÓN MODO OSCURO (A la derecha siempre) -->
      <button
        @click="emit('toggle-dark-mode')"
        class="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:ring-2 ring-indigo-500 transition-all focus:outline-none"
        title="Cambiar modo"
      >
        <svg
          v-if="isDark"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <svg
          v-else
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>
<script setup lang="ts">
import type { NavItem } from "~/interfaces";

const { isMobileMenuOpen, toggleSidebar } = useApp();

defineProps<{
  isDark: boolean;
}>();

const emit = defineEmits<{
  "toggle-dark-mode": [];
}>();

const navItems: NavItem[] = [
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];
</script>
