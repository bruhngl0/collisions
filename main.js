import * as THREE from 'three';
import * as CANNON from 'cannon';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';



import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const cubeTextureLoader = new THREE.CubeTextureLoader

const cameraSpeed = 5;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 2; // Adjust the height as required.
camera.position.z = 5; 

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const environmentMap = cubeTextureLoader.load([
    '/environmentMaps/2/px.png',
    '/environmentMaps/2/nx.png',
    '/environmentMaps/2/py.png',
    '/environmentMaps/2/ny.png',
    '/environmentMaps/2/pz.png',
    '/environmentMaps/2/nz.png',
])


scene.environment = environmentMap
scene.background = environmentMap


const controls = new PointerLockControls(camera, document.body);

document.addEventListener('click', function () {
    controls.lock();
});

controls.addEventListener('lock', function () {
    // Handle lock - for example, hide some UI element
});

controls.addEventListener('unlock', function () {
    // Handle unlock - for example, show some UI element
});



// Add a wall
/*const wallGeometry = new THREE.BoxGeometry(10, 10, 0.5);
const wallMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const wall = new THREE.Mesh(wallGeometry, wallMaterial);
scene.add(wall); */

// Add a floor
const floorGeometry = new THREE.BoxGeometry(50, 0.1, 50);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x555555 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.y = -0.05; // Half of the height to position it at the base.
scene.add(floor); 



const world = new CANNON.World();
world.gravity.set(0, -9.82, 0); // Gravity along the y-axis

// Create wall body
/*const wallShape = new CANNON.Box(new CANNON.Vec3(5, 2.5, 0.25));
const wallBody = new CANNON.Body({ mass: 0 }); // Making it static
wallBody.addShape(wallShape);
world.addBody(wallBody); */

// Create floor body
const floorShape = new CANNON.Box(new CANNON.Vec3(25, 0.05, 25));
const floorBody = new CANNON.Body({ mass: 0 }); // Static body
floorBody.addShape(floorShape);
world.addBody(floorBody); 

// Camera body for collision detection
const cameraShape = new CANNON.Sphere(0.3);
const cameraBody = new CANNON.Body({ mass: 5 });
cameraBody.addShape(cameraShape);
cameraBody.position.set(camera.position.x, camera.position.y, camera.position.z);
world.addBody(cameraBody); 



const keys = { W: false, A: false, S: false, D: false };

document.addEventListener('keydown', (event) => {
    if (keys[event.key.toUpperCase()] !== undefined) {
        keys[event.key.toUpperCase()] = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (keys[event.key.toUpperCase()] !== undefined) {
        keys[event.key.toUpperCase()] = false;
    }
});


const loader = new GLTFLoader();
let mesh;

loader.load('test.glb', (gltf) => {
    gltf.scene.traverse((child) => {
        if (child.isMesh) {
            mesh = child; // This will get your mesh, even if nested
        }
    });

    if (!mesh) {
        console.error("No mesh found in the GLTF model!");
        return;
    }

    scene.add(gltf.scene);

    // Now, you can proceed with the collision setup using the identified 'mesh'
    const box = new THREE.Box3().setFromObject(mesh);
    const size = box.getSize(new THREE.Vector3());

    const halfExtents = new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2);
    const boxShape = new CANNON.Box(halfExtents);

    const body = new CANNON.Body({ mass: 0 }); // Static body for the wall/mesh
    body.addShape(boxShape);

    // Set the position of the physics body to match the position of the mesh.
    const meshWorldPosition = new THREE.Vector3();
    mesh.getWorldPosition(meshWorldPosition);
    body.position.set(meshWorldPosition.x, meshWorldPosition.y, meshWorldPosition.z);

    world.addBody(body);
});





const animate = () => {
    requestAnimationFrame(animate);

    
    if (keys.W) cameraBody.velocity.z = -cameraSpeed;
    if (keys.S) cameraBody.velocity.z = cameraSpeed;
    if (keys.A) cameraBody.velocity.x = -cameraSpeed;
    if (keys.D) cameraBody.velocity.x = cameraSpeed;

    // If no keys are pressed, slow down the camera to a stop
    if (!keys.W && !keys.S) cameraBody.velocity.z *= 0.9;
    if (!keys.A && !keys.D) cameraBody.velocity.x *= 0.9; 
  
    // Update the physics world
    world.step(1 / 60);
  
    // Update the camera's position with cameraBody's position
   camera.position.copy(cameraBody.position); 
  
    renderer.render(scene, camera);
  }
  
  animate()