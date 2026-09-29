<template>
  <!-- FOOTER -->
  <footer
    class="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-sm text-slate-500 dark:text-slate-400"
  >
    <p>
      © {{ new Date().getFullYear() }} {{ profile.name }}. Desarrollado con Nuxt
      3 & Tailwind CSS.
    </p>
  </footer>
</template>
<script setup lang="ts">
const { profile } = useData();
</script>
