<template>
  <!-- CONTACTO -->
  <section
    id="contact"
    class="bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6"
  >
    <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
      ¿Hablamos de tu próximo proyecto?
    </h2>
    <p class="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">
      Estoy disponible para oportunidades freelance, roles a tiempo completo o
      colaboraciones interesantes.
    </p>

    <div class="flex flex-wrap justify-center gap-4 pt-4">
      <a
        :href="'mailto:' + contact.email"
        class="px-6 py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span>{{ contact.email }}</span>
      </a>

      <a
        :href="contact.linkedin"
        target="_blank"
        rel="noopener"
        class="px-6 py-3 rounded-xl font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
      >
        LinkedIn
      </a>

      <a
        :href="contact.github"
        target="_blank"
        rel="noopener"
        class="px-6 py-3 rounded-xl font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
      >
        GitHub
      </a>
    </div>
  </section>
</template>
<script setup lang="ts">
const { contact } = useData();
</script>
