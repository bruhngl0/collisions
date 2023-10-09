/*import * as THREE from 'three';
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
scene.add(wall); 

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
world.addBody(wallBody); 

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
  
  animate() */

 

// Set up the scene, camera, and renderer

//code for layer assignment

/*import * as THREE from 'three'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 2; // Adjust the height as required.
camera.position.z = 5; 

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Create two cubes with different colors
const geometry = new THREE.BoxGeometry(1, 1, 1);
const redMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });

const redCube = new THREE.Mesh(geometry, redMaterial);
const blueCube = new THREE.Mesh(geometry, blueMaterial);

scene.add(redCube);
scene.add(blueCube);

redCube.visible = false;
blueCube.visible = false;

camera.position.z = 5;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Add event listeners to buttons
document.getElementById('showRed').addEventListener('click', () => {
    redCube.visible = true;
    blueCube.visible = false;
});

document.getElementById('showBlue').addEventListener('click', () => {
    redCube.visible = false;
    blueCube.visible = true;
}); */



//GARUDA GAMANA RISHABA VAHANA 

/* working 
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
const cubeTextureLoader = new THREE.CubeTextureLoader
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 2; // Adjust the height as required.
camera.position.z = 5; 

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();

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

const dLoader = new DRACOLoader()
dLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
dLoader.setDecoderConfig({type: 'js'})

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dLoader)

let model;



gltfLoader.load('Chair.glb', (gltf) => {
    const root = gltf.scene
    root.position.set(0,1,0)
    
    root.traverse((child) => {
        if (child.isMesh) {
            model = child; // This will get your mesh, even if nested
        }
    });

    if (!model) {
        console.error("No mesh found in the GLTF model!");
        return;
    }
    console.log(root.children)
    scene.add(root);

})
// Function to apply a texture to the wall
function applyTextureToWall(texturePath) {
    textureLoader.load(texturePath, (texture) => {
        model.material.map = texture;
        texture.flipY = false
        model.material.needsUpdate = true; // Important to update the material
    });
}

// Event listeners for buttons
document.getElementById('texture1Btn').addEventListener('click', () => {
    applyTextureToWall('C1.jpg');
});

document.getElementById('texture2Btn').addEventListener('click', () => {
    applyTextureToWall('C2.jpg');
});

camera.position.z = 5;


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


// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

*/
import * as THREE from 'three';

import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const lightIntensity = 50;
const roomScale = 1;


const dLoader = new DRACOLoader()
dLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
dLoader.setDecoderConfig({type: 'js'})

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dLoader)

const cubeTextureLoader = new THREE.CubeTextureLoader
const textureLoader = new THREE.TextureLoader();

const canvas = document.querySelector('#c');


//scene initalization...
const scene = new THREE.Scene();

const environmentMap = cubeTextureLoader.load([
    '/environmentMaps/2/px.png',
    '/environmentMaps/2/nx.png',
    '/environmentMaps/2/py.png',
    '/environmentMaps/2/ny.png',
    '/environmentMaps/2/pz.png',
    '/environmentMaps/2/nz.png',
])


scene.background = environmentMap

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const camera = new THREE.PerspectiveCamera (80, window.innerWidth/ window.innerHeight , 0.01, 5000);
camera.position.set(0,1.2,-6)
scene.add(camera)

// Cursor Initialzation
const cursorGeometry = new THREE.RingGeometry(0.005, 0.001, 20);
const cursorMaterial = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
const cursor = new THREE.Mesh(cursorGeometry, cursorMaterial);

camera.add(cursor);
cursor.position.set(0, 0, -0.5);

const light1 = new THREE.AmbientLight( 0x404040, lightIntensity );
scene.add(light1);


//controls
const controls = new PointerLockControls(camera, canvas);
scene.add(controls.getObject());

const renderer  = new THREE.WebGLRenderer({canvas, antialias: true});
renderer.setSize(sizes.width, sizes.height );
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputColorSpace = THREE.SRGBColorSpace

let chair
//import dracoModel

gltfLoader.load( 'maiafinal1.glb', function ( gltf ) {
  const root = gltf.scene;
  scene.add( root );
  root.position.set(0 , 0 , -13);
  root.rotation.y = Math.PI / 2;  


  chair = gltf.scene.children.find((child) => child.name === 'chair-065_1024_Baked')
  console.log(chair)


  let scale = roomScale;
  root.scale.set(scale+(scale*0.2), scale, scale+(scale*0.2));
  


  console.log("yy")
  console.log(root)
 
 console.log(root.children)

}, undefined, function ( error ) {

	console.error( error );    

});

function applyTextureToWall(texturePath) {
    textureLoader.load(texturePath, (texture) => {
        console.log("Loaded texture:", texture);

        if (chair && chair.material) {
            console.log("Chair material before:", chair.material);

            chair.material.map = texture;
            texture.flipY = false;
            chair.material.needsUpdate = true; // Important to update the material

            console.log("Chair material after:", chair.material);
        } else {
            console.error("Chair or chair material not found.");
        }
    });
}


 
document.getElementById('texture1Btn').addEventListener('click', () => {
    applyTextureToWall('C1.jpg');
});


 
document.getElementById('texture2Btn').addEventListener('click', () => {
    applyTextureToWall('C2.jpg');
});
// Add an event listener to the button



let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;

let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();

function animate() {
    requestAnimationFrame(animate);

    const time = performance.now();
    let delta = (time - prevTime) / 1000;

    if (delta > 0.02) {
        delta = 0.02;
    }

    velocity.x -= velocity.x * 50 * delta;
    velocity.z -= velocity.z * 50 * delta;

    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize();

    if (moveForward) {
        velocity.z -= direction.z * 150 * delta;
    }
    if (moveBackward) {
        velocity.z -= direction.z * 150 * delta;  // Note: I changed this to += so that it moves backward
    }
    if (moveLeft) {
        velocity.x -= direction.x * 150 * delta;
    }
    if (moveRight) {
        velocity.x -= direction.x * 150 * delta;  // Note: I changed this to += so that it moves right
    }

    controls.moveRight(-velocity.x * delta);
    controls.moveForward(-velocity.z * delta);

    prevTime = time;
    renderer.render(scene, camera);
}

animate();



// Control Event Listeners
const onKeyDown = function ( event ) {

  switch ( event.code ) {

      case 'ArrowUp':
      case 'KeyW':
          moveForward = true;
          break;

      case 'ArrowLeft':
      case 'KeyA':
          moveLeft = true;
          break;

      case 'ArrowDown':
      case 'KeyS':
          moveBackward = true;
          break;

      case 'ArrowRight':
      case 'KeyD':
          moveRight = true;
          break;
      case 'Space':
          if(controls.isLocked){
              controls.unlock();
          } else {
              controls.lock();
          }
          break;
      }


  };

const onKeyUp = function ( event ) {

  switch ( event.code ) {
      case 'ArrowUp':
      case 'KeyW':
          moveForward = false;
          break;

      case 'ArrowLeft':
      case 'KeyA':
          moveLeft = false;
          break;

      case 'ArrowDown':
      case 'KeyS':
          moveBackward = false;
          break;

      case 'ArrowRight':
      case 'KeyD':
          moveRight = false;
          break;
  }
};

document.addEventListener( 'keydown', onKeyDown );
document.addEventListener( 'keyup', onKeyUp );

