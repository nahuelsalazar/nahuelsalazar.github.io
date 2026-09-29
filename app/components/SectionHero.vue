<template>
  <!-- HERO SECTION WITH 3D AVATAR -->
  <section
    id="hero"
    class="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-8"
  >
    <div class="flex-1 space-y-6 text-center md:text-left">
      <div
        class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800"
      >
        ⚡ Disponible para nuevos proyectos
      </div>
      <h1
        class="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight"
      >
        Hola, soy
        <span
          class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >{{ profile.name }}</span
        >
      </h1>
      <h2
        class="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-400"
      >
        {{ profile.title }}
      </h2>
      <p
        class="text-slate-600 dark:text-slate-400 max-w-xl text-lg leading-relaxed"
      >
        {{ profile.summary }}
      </p>
      <div
        class="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
      >
        <a
          href="#projects"
          class="px-6 py-3 rounded-xl font-medium bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/25 transition-all"
        >
          Ver Proyectos
        </a>
        <a
          href="#contact"
          class="px-6 py-3 rounded-xl font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
        >
          Contactar
        </a>
      </div>
    </div>
    <Container3D />
  </section>
</template>
<script setup lang="ts">
const { profile } = useData();
</script>
