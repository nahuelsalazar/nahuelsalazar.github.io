<template>
  <div class="min-h-screen transition-colors duration-300 font-sans">
    <div
      class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen selection:bg-indigo-500 selection:text-white"
    >
      <Header :is-dark="isDark" @toggle-dark-mode="toggleDarkMode" />
      <Sidebar></Sidebar>
      <main class="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 space-y-32">
        <SectionHero />
        <SectionSkills />
        <SectionExperience />
        <SectionProjects />
        <SectionContact />
      </main>
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const { profile } = useData();

// ---------- MODO CLARO / MODO OSCURO ----------
const { isDark, toggleDarkMode } = useTheme();

useHead({
  title: `${profile.value.name} — ${profile.value.title}`,
  meta: [
    { name: "description", content: profile.value.summary },
    { name: "author", content: profile.value.name },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content: `${profile.value.name} — ${profile.value.title}`,
    },
    { property: "og:description", content: profile.value.summary },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "es_ES" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: `${profile.value.name} — ${profile.value.title}`,
    },
    { name: "twitter:description", content: profile.value.summary },
  ],
  link: [{ rel: "canonical", href: "https://tudominio.com" }],
  htmlAttrs: {
    class: computed(() => (isDark.value ? "dark" : "")),
  },
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
