const box = document.getElementById("globe");
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setClearColor(0x000000, 0);
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

/*renderer.outputEncoding = THREE.sRGBEncoding;
earthTexture.encoding = THREE.sRGBEncoding;
Don't exactly know what these lines do, but they keep the texture rendering crisp and saturated correctly */

const pivot = new THREE.Group();
pivot.rotation.x = 0.3;
pivot.rotation.z = -0.15;
pivot.add(earth);
scene.add(pivot);
const spinSpeed = 0.01;
/* This allows the globe to rotate on a stationary axis, and easily editable variables allow you to angle the axis as you please. */

function animate() {
	requestAnimationFrame(animate);
	earth.rotateOnAxis(new THREE.Vector3(0,1,0), spinSpeed);
	renderer.render(scene, camera);
};
animate();
/* This actually renders the entire scene and loops ad inifinitum */

window.addEventListener("resize", () => {
	renderer.setSize(box.clientWidth, box.clientHeight);
	camera.aspect = box.clientWidth / box.clientHeight;
	camera.updateProjectionMatrix();
});
/* In case the window is resized */
