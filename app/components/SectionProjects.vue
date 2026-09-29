<template>
  <!-- PROYECTOS -->
  <section id="projects" class="space-y-12">
    <div>
      <h2 class="text-3xl font-bold tracking-tight">Proyectos Destacados</h2>
      <p class="text-slate-500 dark:text-slate-400 mt-2">
        Algunos de los trabajos y proyectos en los que he participado.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="group bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
      >
        <!-- Image Placeholder -->
        <div
          class="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden flex items-center justify-center"
        >
          <div
            class="text-4xl text-slate-400 dark:text-slate-600 font-bold group-hover:scale-110 transition-transform duration-300"
          >
            {{ project.title[0] }}
          </div>
          <div
            class="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
          ></div>
        </div>

        <div class="p-6 flex-1 flex flex-col justify-between space-y-6">
          <div>
            <h3
              class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors"
            >
              {{ project.title }}
            </h3>
            <p
              class="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed"
            >
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/50"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- PROJECT LINKS -->
          <div
            class="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800"
          >
            <a
              :href="project.demoUrl"
              target="_blank"
              rel="noopener"
              class="flex-1 text-center py-2.5 px-4 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center justify-center gap-2"
            >
              <span>Demo Online</span>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <a
              :href="project.githubUrl"
              target="_blank"
              rel="noopener"
              class="py-2.5 px-4 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { projects } = useData();
</script>
