<template>
  <!-- EXPERIENCIA PROFESIONAL -->
  <section id="experience" class="space-y-12">
    <div>
      <h2 class="text-3xl font-bold tracking-tight">Experiencia Profesional</h2>
      <p class="text-slate-500 dark:text-slate-400 mt-2">
        Mi trayectoria en el desarrollo de software.
      </p>
    </div>

    <div
      class="relative border-l-2 border-indigo-500/30 dark:border-indigo-500/20 ml-4 md:ml-6 space-y-12"
    >
      <div
        v-for="(job, index) in experience"
        :key="index"
        class="relative pl-8 md:pl-10 group"
      >
        <!-- Timeline Dot -->
        <span
          class="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-slate-950 group-hover:scale-125 transition-transform"
        ></span>

        <div
          class="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div
            class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3"
          >
            <div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                {{ job.role }}
              </h3>
              <span class="text-indigo-600 dark:text-indigo-400 font-medium">{{
                job.company
              }}</span>
            </div>
            <span
              class="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 w-fit"
            >
              {{ job.period }}
            </span>
          </div>
          <p
            class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4"
          >
            {{ job.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in job.techStack"
              :key="tech"
              class="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { experience } = useData();
</script>
