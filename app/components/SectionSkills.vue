<template>
  <!-- SOBRE MÍ / HABILIDADES -->
  <section id="about" class="space-y-8">
    <div class="text-center md:text-left">
      <h2 class="text-3xl font-bold tracking-tight">
        Habilidades & Tecnologías
      </h2>
      <p class="text-slate-500 dark:text-slate-400 mt-2">
        Herramientas y tecnologías con las que trabajo a diario.
      </p>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      <div
        v-for="skill in skills"
        :key="skill"
        class="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center font-semibold text-slate-700 dark:text-slate-300 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors shadow-sm"
      >
        {{ skill }}
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { skills } = useData();
</script>
