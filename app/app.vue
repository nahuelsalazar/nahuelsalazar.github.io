<template>
  <div class="min-h-screen transition-colors duration-300 font-sans">
    <div
      class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen selection:bg-indigo-500 selection:text-white"
    >
      <!-- NAV BAR -->
      <header
        class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 transition-colors"
      >
        <div
          class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        >
          <a
            href="#hero"
            class="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent"
          >
            &lt;DevPortfolio /&gt;
          </a>

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

          <!-- Dark Mode Toggle Button -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:ring-2 ring-indigo-500 transition-all focus:outline-none"
            title="Cambiar modo"
          >
            <!-- Sun Icon -->
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
            <!-- Moon Icon -->
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
import { ref, onMounted, onUnmounted } from "vue";
import { projects, skills, experience, profile, contact } from "./consts";

// ---------- MODO CLARO / MODO OSCURO ----------
const { isDark, toggleDarkMode } = useTheme();

useHead({
  title: `${profile.value.name} — ${profile.value.title}`,

  meta: [
    {
      name: "description",
      content: profile.value.summary,
    },
    {
      name: "author",
      content: profile.value.name,
    },
    {
      name: "robots",
      content: "index, follow",
    },

    // Open Graph
    {
      property: "og:title",
      content: `${profile.value.name} — ${profile.value.title}`,
    },
    {
      property: "og:description",
      content: profile.value.summary,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:locale",
      content: "es_ES",
    },

    // Twitter / X
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: `${profile.value.name} — ${profile.value.title}`,
    },
    {
      name: "twitter:description",
      content: profile.value.summary,
    },
  ],

  link: [
    {
      rel: "canonical",
      href: "https://tudominio.com",
    },
  ],

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

onMounted(async () => {
  // Inicializamos modo oscuro por defecto en el HTML
  if (!canvasContainer.value) return;

  // Importación dinámica de Three.js sólo en el navegador (Client-side)
  const THREE = await import("three");
  const { GLTFLoader } =
    await import("three/examples/jsm/loaders/GLTFLoader.js");
  const { OrbitControls } =
    await import("three/examples/jsm/controls/OrbitControls.js");

  const width = canvasContainer.value.clientWidth;
  const height = canvasContainer.value.clientHeight;

  // 1. Scene
  scene = new THREE.Scene();

  // 2. Camera
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 1.5, 3);

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

  // 4. Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 2);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(5, 5, 5);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024; // Calidad de la sombra
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 15;

  // Un bias negativo muy pequeño aleja la sombra de la superficie lo suficiente para evitar el acné.
  directionalLight.shadow.bias = -0.001;

  // Opcionalmente, normalBias ayuda a suavizar artefactos en superficies curvas o bordes.
  directionalLight.shadow.normalBias = 0.02;

  scene.add(directionalLight);

  // 5. Orbit Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.minPolarAngle = Math.PI * 0.3;
  controls.maxPolarAngle = Math.PI * 0.65;

  // 6. Carga del Modelo GLB
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

      // Añadir primero el modelo
      scene.add(model);

      model.rotation.y = -0.5;

      // Calcular dimensiones del modelo
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      console.log("📦 Tamaño:", size);
      console.log("📍 Centro:", center);

      // Centrar el modelo
      model.position.set(-center.x, -center.y - 0.5, -center.z);

      // Calcular escala automática
      const maxDimension = Math.max(size.x, size.y, size.z);

      const targetSize = 2;

      if (maxDimension > 0) {
        const scale = targetSize / maxDimension;
        model.scale.setScalar(scale);
      }

      console.log("📐 Escala:", model.scale);
    },
    undefined,
    (_error) => {
      // Si el archivo GLB aún no existe o falla la carga, creamos un cubo estilizado de fallback
      console.error("❌ Error cargando avatar.glb:", _error);
      const geometry = new THREE.IcosahedronGeometry(0.8, 0);
      const material = new THREE.MeshStandardMaterial({
        color: 0x6366f1,
        wireframe: true,
      });
      const fallbackMesh = new THREE.Mesh(geometry, material);
      fallbackMesh.position.set(0, 0, 0);
      scene.add(fallbackMesh);

      // Animación continua para la figura de repuesto
      const animateFallback = () => {
        fallbackMesh.rotation.x += 0.005;
        fallbackMesh.rotation.y += 0.01;
      };
      scene.userData.animateFallback = animateFallback;
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

  // 8. Manejo de cambio de tamaño de ventana (Responsive)
  const handleResize = () => {
    if (!canvasContainer.value || !renderer || !camera) return;
    const w = canvasContainer.value.clientWidth;
    const h = canvasContainer.value.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
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
