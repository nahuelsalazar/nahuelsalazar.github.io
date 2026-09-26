export const projects = ref([
  {
    title: "Expense Tracker App",
    description:
      "App para trackeo de gastos de uso personal creada con Electron y React",
    tags: ["Electron", "React", "SQLite", "Shadcn"],
    demoUrl: "#",
    githubUrl: "https://github.com/nahuelsalazar/expense-tracker-app",
  },
]);

export const skills = ref([
  // Frontend
  "Vue.js / Nuxt 3",
  "TypeScript",
  "Tailwind CSS",
  "Three.js / WebGL",

  // Backend
  "Node.js",
  "Express / NestJS",
  "PHP / Laravel",
  "Python / Django",

  // Databases
  "PostgreSQL / MongoDB",

  // APIs
  "REST APIs / GraphQL",

  // Testing
  "Testing (Jest/Vitest)",

  // Tools & Version Control
  "Git / GitHub",
]);

export const experience = ref([
  {
    role: "Frontend Developer",
    company: "Sofre Digital",
    period: "2022–2025",
    description:
      "Desarrollo Frontend de un HIS (Health Information System) con Angular, creando y manteniendo componentes de una librería basada en Angular Material, e implementando una arquitectura modular.",
    techStack: ["Angular", "TypeScript", "NGX Store"],
  },
  {
    role: "Frontend Developer",
    company: "Sofre Digital",
    period: "2022–2025",
    description:
      "Desarrollo Frontend y testing unitario y de componentes para la empresa Telecentro, migración de un sistema monolítico a microservicios. Mejora en tiempos de carga del sistema.",
    techStack: ["Vue 3", "Vue Router", "Pinia", "Vuetify", "Vitest"],
  },
  {
    role: "Full Stack Developer",
    company: "Municipalidad de Corrientes",
    period: "2020–2022",
    description:
      "Desarrollo de APIs REST y mantenimiento de sistemas internos, incluyendo dashboards administrativos y visores de mapas, participando en la implementación de nuevas funcionalidades y mantenimiento evolutivo.",
    techStack: [
      "Vue",
      "Angular",
      "React",
      "Leaflet",
      "React Leaflet",
      "Postgresql",
      "PHP / Laravel",
      "Jquery",
    ],
  },
]);

// ---------- PLACEHOLDERS / DATOS DEL PORTFOLIO ----------
export const profile = ref({
  name: "Nahuel Salazar",
  title: "Full Stack Web Developer & Frontend Specialist",
  summary:
    "Me gusta crear experiencias web modernas, escalables y visualmente atractivas con Nuxt, Vue, React y tecnologías Node.js.",
});

export const contact = ref({
  email: "nahuelsalazar53@gmail.com",
  linkedin: "https://www.linkedin.com/in/nahuel-salazar-4201501a6/",
  github: "https://github.com/nahuelsalazar",
});
