document.addEventListener("DOMContentLoaded", () => {
const box = document.getElementById("globe");
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(box.clientWidth, box.clientHeight);
box.appendChild(renderer.domElement);
/* These are the necessary bits to establish the 3D model */

const camera = new THREE.PerspectiveCamera(45, box.clientWidth / box.clientHeight, 0.1, 1000);
camera.position.z = 7;
/* Loads camera in */

const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load("https://timothyleake.github.io/assets/texture.png");
const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
/* Loads globe in */

renderer.outputEncoding = THREE.sRGBEncoding;
earthTexture.encoding = THREE.sRGBEncoding;
/* Don't exactly know what these lines do, but they keep the texture rendering crisp and saturated correctly */

  // ===== Axis tilt variables (easy to edit) =====
  const axisTiltTowards   = 0.3; // radians (~23°) tilt toward/away viewer
  const axisTiltClockwise = -0.15; // radians (~11°) clockwise/counterclockwise
  const spinSpeed = 0.01; // radians per frame
  // ==============================================

  // Pivot group for stationary tilted axis
  const pivot = new THREE.Group();
  pivot.rotation.x = axisTiltTowards;
  pivot.rotation.z = axisTiltClockwise;
  pivot.add(earth);
  scene.add(pivot);

  function animate() {
    requestAnimationFrame(animate);

    // Auto-rotation around stationary axis
    earth.rotateOnAxis(new THREE.Vector3(0,1,0), spinSpeed);

    renderer.render(scene, camera);
  }

  animate();
  });
