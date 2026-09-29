<template>
  <!-- FOOTER -->
  <div
    class="relative px-5 py-5 border-t border-slate-200/80 dark:border-slate-800/80"
  >
    <!-- CTA -->
    <a
      href="#contact"
      @click="toggleSidebar"
      class="group flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10 dark:from-indigo-500/10 dark:to-violet-500/10 border border-indigo-100 dark:border-indigo-500/15 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-200"
    >
      <div
        class="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform"
      >
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.8"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </div>

      <div class="flex-1 min-w-0">
        <span
          class="block text-sm font-semibold text-slate-800 dark:text-slate-200"
        >
          ¿Trabajamos juntos?
        </span>

        <span
          class="block text-[11px] text-slate-500 dark:text-slate-400 truncate"
        >
          Hablemos de tu próximo proyecto
        </span>
      </div>
    </a>

    <p class="mt-4 text-center text-[10px] text-slate-400 dark:text-slate-600">
      © {{ new Date().getFullYear() }} {{ profile.name }}
    </p>
  </div>
</template>
<script setup lang="ts">
const { isMobileMenuOpen, toggleSidebar } = useApp();
const props = defineProps<{
  profile: any;
}>();
</script>
