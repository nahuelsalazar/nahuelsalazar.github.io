<template>
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
</template>
<script setup lang="ts">
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
