<template>
  <div class="min-h-screen transition-colors duration-300 font-sans">
    <div
      class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen selection:bg-indigo-500 selection:text-white"
    >
      <!-- NAV BAR -->
      <!-- NAV BAR -->
      <header
        class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 transition-colors"
      >
        <div
          class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative"
        >
          <!-- BOTÓN HAMBURGUESA (Solo visible en móvil) -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
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
          <nav
            class="hidden md:flex items-center space-x-8 text-sm font-medium"
          >
            <a
              href="#about"
              class="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >Sobre mí</a
            >
            <a
              href="#experience"
              class="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >Experiencia</a
            >
            <a
              href="#projects"
              class="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >Proyectos</a
            >
            <a
              href="#contact"
              class="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >Contacto</a
            >
          </nav>

          <!-- BOTÓN MODO OSCURO (A la derecha siempre) -->
          <button
            @click="toggleDarkMode"
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

      <!-- SIDEBAR MÓVIL (DESPLEGABLE LATERAL) -->
      <!-- SIDEBAR MÓVIL -->
      <Teleport to="body">
        <!-- OVERLAY -->
        <Transition
          enter-active-class="transition-opacity duration-300 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="isMobileMenuOpen"
            @click="isMobileMenuOpen = false"
            class="fixed inset-0 z-[60] bg-slate-950/60 dark:bg-black/70 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          ></div>
        </Transition>

        <!-- SIDEBAR -->
        <Transition
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-250 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="-translate-x-full"
        >
          <aside
            v-if="isMobileMenuOpen"
            class="fixed inset-y-0 left-0 z-[70] w-[min(88vw,340px)] md:hidden"
            aria-label="Menú de navegación"
          >
            <div
              class="relative flex h-full flex-col overflow-hidden bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 shadow-[20px_0_60px_-20px_rgba(15,23,42,0.25)] dark:shadow-[20px_0_60px_-20px_rgba(0,0,0,0.7)]"
            >
              <!-- DECORACIÓN SUPERIOR -->
              <div
                class="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 blur-3xl pointer-events-none"
              ></div>

              <div
                class="absolute top-32 -right-24 w-48 h-48 rounded-full bg-violet-500/10 dark:bg-violet-500/10 blur-3xl pointer-events-none"
              ></div>

              <!-- HEADER -->
              <div
                class="relative px-5 pt-5 pb-4 border-b border-slate-200/80 dark:border-slate-800/80"
              >
                <div class="flex items-center justify-between">
                  <!-- BRAND -->
                  <a
                    href="#hero"
                    @click="isMobileMenuOpen = false"
                    class="flex items-center gap-3 group"
                  >
                    <!-- Logo -->
                    <div
                      class="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200"
                    >
                      <span class="text-sm font-black"> &lt;/&gt; </span>

                      <!-- Status -->
                      <span
                        class="absolute -right-0.5 -bottom-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-950"
                      ></span>
                    </div>

                    <div class="leading-tight">
                      <span
                        class="block text-sm font-bold tracking-tight text-slate-900 dark:text-white"
                      >
                        DevPortfolio
                      </span>

                      <span
                        class="block mt-0.5 text-[11px] text-slate-500 dark:text-slate-400"
                      >
                        Desarrollo & tecnología
                      </span>
                    </div>
                  </a>

                  <!-- CLOSE -->
                  <button
                    @click="isMobileMenuOpen = false"
                    type="button"
                    class="flex items-center justify-center w-9 h-9 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    aria-label="Cerrar menú"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- CONTENIDO -->
              <div class="relative flex-1 overflow-y-auto px-4 py-6">
                <!-- LABEL -->
                <div class="px-3 mb-3">
                  <span
                    class="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500"
                  >
                    Navegación
                  </span>
                </div>

                <!-- NAV -->
                <nav class="space-y-1.5">
                  <!-- SOBRE MÍ -->
                  <a
                    href="#about"
                    @click="isMobileMenuOpen = false"
                    class="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-200"
                  >
                    <span
                      class="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/15 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                    >
                      <svg
                        class="w-4.5 h-4.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.8"
                          d="M15.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM4 21a8 8 0 0116 0"
                        />
                      </svg>
                    </span>

                    <span class="flex-1 font-medium text-sm"> Sobre mí </span>

                    <span
                      class="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors"
                    >
                      01
                    </span>

                    <svg
                      class="w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>

                  <!-- EXPERIENCIA -->
                  <a
                    href="#experience"
                    @click="isMobileMenuOpen = false"
                    class="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-200"
                  >
                    <span
                      class="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/15 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                    >
                      <svg
                        class="w-4.5 h-4.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.8"
                          d="M20 7h-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM8 7h8"
                        />
                      </svg>
                    </span>

                    <span class="flex-1 font-medium text-sm">
                      Experiencia
                    </span>

                    <span
                      class="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400"
                    >
                      02
                    </span>

                    <svg
                      class="w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>

                  <!-- PROYECTOS -->
                  <a
                    href="#projects"
                    @click="isMobileMenuOpen = false"
                    class="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-200"
                  >
                    <span
                      class="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/15 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                    >
                      <svg
                        class="w-4.5 h-4.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.8"
                          d="M4 5a2 2 0 012-2h5l2 3h5a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"
                        />
                      </svg>
                    </span>

                    <span class="flex-1 font-medium text-sm"> Proyectos </span>

                    <span
                      class="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400"
                    >
                      03
                    </span>

                    <svg
                      class="w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>

                  <!-- CONTACTO -->
                  <a
                    href="#contact"
                    @click="isMobileMenuOpen = false"
                    class="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-200"
                  >
                    <span
                      class="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/15 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                    >
                      <svg
                        class="w-4.5 h-4.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.8"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>

                    <span class="flex-1 font-medium text-sm"> Contacto </span>

                    <span
                      class="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400"
                    >
                      04
                    </span>

                    <svg
                      class="w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </nav>
              </div>

              <!-- FOOTER -->
              <div
                class="relative px-5 py-5 border-t border-slate-200/80 dark:border-slate-800/80"
              >
                <!-- CTA -->
                <a
                  href="#contact"
                  @click="isMobileMenuOpen = false"
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

                <p
                  class="mt-4 text-center text-[10px] text-slate-400 dark:text-slate-600"
                >
                  © {{ new Date().getFullYear() }} {{ profile.name }}
                </p>
              </div>
            </div>
          </aside>
        </Transition>
      </Teleport>

      <main class="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 space-y-32">
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

          <!-- 3D MODEL CANVAS CONTAINER -->
          <div
            class="flex-1 w-full max-w-md h-[400px] sm:h-[480px] relative rounded-3xl bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent border border-slate-200 dark:border-slate-800/80 shadow-2xl flex items-center justify-center overflow-hidden"
          >
            <div ref="canvasContainer" class="w-full h-full"></div>

            <!-- Indicator label -->
            <div
              class="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs bg-slate-900/60 text-white/80 backdrop-blur-md border border-white/10 pointer-events-none"
            >
              🖱️ Interactúa con el avatar 3D
            </div>
          </div>
        </section>

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

        <!-- EXPERIENCIA PROFESIONAL -->
        <section id="experience" class="space-y-12">
          <div>
            <h2 class="text-3xl font-bold tracking-tight">
              Experiencia Profesional
            </h2>
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
                    <h3
                      class="text-xl font-bold text-slate-900 dark:text-white"
                    >
                      {{ job.role }}
                    </h3>
                    <span
                      class="text-indigo-600 dark:text-indigo-400 font-medium"
                      >{{ job.company }}</span
                    >
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

        <!-- PROYECTOS -->
        <section id="projects" class="space-y-12">
          <div>
            <h2 class="text-3xl font-bold tracking-tight">
              Proyectos Destacados
            </h2>
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

        <!-- CONTACTO -->
        <section
          id="contact"
          class="bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6"
        >
          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
            ¿Hablamos de tu próximo proyecto?
          </h2>
          <p
            class="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg"
          >
            Estoy disponible para oportunidades freelance, roles a tiempo
            completo o colaboraciones interesantes.
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
      </main>

      <!-- FOOTER -->
      <footer
        class="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-sm text-slate-500 dark:text-slate-400"
      >
        <p>
          © {{ new Date().getFullYear() }} {{ profile.name }}. Desarrollado con
          Nuxt 3 & Tailwind CSS.
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { projects, skills, experience, profile, contact } from "./consts";

const isMobileMenuOpen = ref(false);

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

// ---------- CARGA DEL MODELO 3D CON THREE.JS ----------
const canvasContainer = ref<HTMLDivElement | null>(null);
let scene: any = null;
let camera: any = null;
let renderer: any = null;
let animationFrameId: number | null = null;
let resizeObserver: ResizeObserver | null = null;

// Función para ajustar la distancia de la cámara en pantallas móviles estrechas
const updateCameraAspect = () => {
  if (!camera || !canvasContainer.value) return;
  const w = canvasContainer.value.clientWidth;
  const h = canvasContainer.value.clientHeight;
  if (w === 0 || h === 0) return;

  const aspect = w / h;
  camera.aspect = aspect;

  // Si la pantalla es estrecha (móviles/tablets verticales), alejamos la cámara proporcionalmente
  const baseDistance = 3.2;
  if (aspect < 1) {
    camera.position.z = baseDistance / aspect;
  } else {
    camera.position.z = baseDistance;
  }

  camera.updateProjectionMatrix();
};

onMounted(async () => {
  if (!canvasContainer.value) return;

  // Importación dinámica de Three.js (Client-side)
  const THREE = await import("three");
  const { GLTFLoader } =
    await import("three/examples/jsm/loaders/GLTFLoader.js");
  const { OrbitControls } =
    await import("three/examples/jsm/controls/OrbitControls.js");

  const width = canvasContainer.value.clientWidth || 300;
  const height = canvasContainer.value.clientHeight || 400;

  // 1. Scene
  scene = new THREE.Scene();

  // 2. Camera
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(1, 1, 1);

  // 3. Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  canvasContainer.value.appendChild(renderer.domElement);

  // Ajustar cámara según aspect ratio inicial
  updateCameraAspect();

  // 4. Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 2);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
  directionalLight.position.set(5, 5, 5);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.bias = -0.001;
  directionalLight.shadow.normalBias = 0.02;
  scene.add(directionalLight);

  // 5. Orbit Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.minPolarAngle = Math.PI * 0.3;
  controls.maxPolarAngle = Math.PI * 0.65;

  const offsetPanX = -0.2;

  camera.position.x += offsetPanX;
  controls.target.x += offsetPanX;
  controls.update();

  // 6. Carga del Modelo GLB con Grupo Contenedor (MÉTODO LIMPIO Y CENTRADO)
  const loader = new GLTFLoader();
  loader.load(
    "/avatar.glb",
    (gltf) => {
      console.log("✅ Modelo cargado correctamente");
      const model = gltf.scene;

      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      // Crear un grupo pivote
      const wrapperGroup = new THREE.Group();
      scene.add(wrapperGroup);
      wrapperGroup.add(model);

      // A) Calcular bounding box original
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      // B) Centrar el modelo DENTRO de su propio wrapper en el origen (0,0,0)
      model.position.x = -center.x;
      model.position.y = -center.y;
      model.position.z = -center.z;

      // C) Escalar el grupo completo
      const maxDimension = Math.max(size.x, size.y, size.z);
      const targetSize = 2.0;

      if (maxDimension > 0) {
        const scale = targetSize / maxDimension;
        wrapperGroup.scale.setScalar(scale);
      }

      // D) Rotación inicial
      wrapperGroup.rotation.y = -0.3;
    },
    undefined,
    (_error) => {
      console.error("❌ Error cargando avatar.glb:", _error);
      const geometry = new THREE.IcosahedronGeometry(0.8, 0);
      const material = new THREE.MeshStandardMaterial({
        color: 0x6366f1,
        wireframe: true,
      });
      const fallbackMesh = new THREE.Mesh(geometry, material);
      scene.add(fallbackMesh);

      scene.userData.animateFallback = () => {
        fallbackMesh.rotation.x += 0.005;
        fallbackMesh.rotation.y += 0.01;
      };
    },
  );

  // 7. Loop de animación
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    controls.update();

    if (scene.userData.animateFallback) {
      scene.userData.animateFallback();
    }

    renderer.render(scene, camera);
  };
  animate();

  // 8. Manejo Responsive preciso con ResizeObserver
  const handleResize = () => {
    if (!canvasContainer.value || !renderer) return;
    const w = canvasContainer.value.clientWidth;
    const h = canvasContainer.value.clientHeight;
    if (w === 0 || h === 0) return;

    updateCameraAspect();
    renderer.setSize(w, h);
  };

  resizeObserver = new ResizeObserver(() => handleResize());
  resizeObserver.observe(canvasContainer.value);
});

onUnmounted(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
  if (renderer && renderer.domElement) {
    renderer.dispose();
  }
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
