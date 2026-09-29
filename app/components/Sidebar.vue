<template>
  <!-- SIDEBAR  -->
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
        @click="toggleSidebar"
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
          <!-- HEADER -->
          <div
            class="relative px-5 pt-5 pb-4 border-b border-slate-200/80 dark:border-slate-800/80"
          >
            <div class="flex items-center justify-between">
              <!-- BRAND -->
              <a
                href="#hero"
                @click="toggleSidebar"
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
                @click="toggleSidebar"
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
              <a
                v-for="item in navItems"
                :key="item.href"
                :href="item.href"
                @click="toggleSidebar"
                class="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-200"
              >
                <!-- ICONO -->
                <span
                  class="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/15 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                >
                  <component :is="item.icon" />
                </span>

                <!-- TEXTO -->
                <span class="flex-1 font-medium text-sm">
                  {{ item.label }}
                </span>

                <!-- NÚMERO -->
                <span
                  class="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors"
                >
                  {{ item.number }}
                </span>

                <!-- FLECHA -->
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

          <SidebarFooter :profile="profile"></SidebarFooter>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>
<script setup lang="ts">
import type { NavItemWithIcon } from "~/interfaces";
import UserIcon from "@/components/icons/user-icon.vue";
import MailIcon from "@/components/icons/mail-icon.vue";
import FolderIcon from "@/components/icons/folder-icon.vue";
import BriefcaseIcon from "@/components/icons/briefcase-icon.vue";

const { isMobileMenuOpen, toggleSidebar } = useApp();
const { profile } = useData();

const navItems: NavItemWithIcon[] = [
  {
    label: "Sobre mí",
    href: "#about",
    number: "01",
    icon: UserIcon,
  },
  {
    label: "Experiencia",
    href: "#experience",
    number: "02",
    icon: BriefcaseIcon,
  },
  {
    label: "Proyectos",
    href: "#projects",
    number: "03",
    icon: FolderIcon,
  },
  {
    label: "Contacto",
    href: "#contact",
    number: "04",
    icon: MailIcon,
  },
];
</script>
