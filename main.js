import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import * as CANNON from 'cannon';


const lightIntensity = 50;
const roomScale = 1;

const canvas = document.querySelector('#c');
const dLoader = new DRACOLoader()
dLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
dLoader.setDecoderConfig({type: 'js'})

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dLoader)

const cubeTextureLoader = new THREE.CubeTextureLoader



const scene = new THREE.Scene();

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

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}



const camera = new THREE.PerspectiveCamera (80, window.innerWidth/ window.innerHeight , 0.01, 5000);
camera.position.set(4 ,1.2, +2   )
     
scene.add(camera)


const cursorGeometry = new THREE.RingGeometry(0.005, 0.001, 20);
const cursorMaterial = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
const cursor = new THREE.Mesh(cursorGeometry, cursorMaterial);

camera.add(cursor);
cursor.position.set(0, 0, -0.5);

const light1 = new THREE.AmbientLight( 0x404040, lightIntensity );
scene.add(light1);


const controls = new PointerLockControls(camera, canvas);

scene.add(controls.getObject());

const renderer  = new THREE.WebGLRenderer({canvas, antialias: true});
renderer.setSize(sizes.width, sizes.height );
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputColorSpace = THREE.SRGBColorSpace

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
    renderer.setPixelRatio(Math .min(window.devicePixelRatio, 2))
})


const world = new CANNON.World();
world.gravity.set(0, 0, 0); // gravity in m/s^2
world.broadphase = new CANNON.NaiveBroadphase();

function setupCollisionForMesh(mesh) {
         // Ensure bounding box is computed
         console.log(mesh)
    mesh.geometry.computeBoundingBox();

    // Get size and half extents
    const size = mesh.geometry.boundingBox.getSize(new THREE.Vector3());
    const halfExtents = new CANNON.Vec3(size.x * 0.5, size.y * 0.5, size.z * 0.5);

    // Create and configure a cannon.js body for the mesh
    const body = new CANNON.Body({ 
        mass: 0, 
        shape: new CANNON.Box(halfExtents),
        position: mesh.getWorldPosition(new THREE.Vector3())
    });
    
    world.addBody(body);
}



gltfLoader.load( 'walls.glb', function ( gltf ) {

     const root = gltf.scene;
     scene.add( root );
     root.position.set(0 , 0 , 0);
     
     console.log(root.children)
    root.traverse((child)=>{
      if(child instanceof THREE.Mesh){
    
        setupCollisionForMesh(child)
      }
     }) 
   
     let scale = roomScale;
     root.scale.set(scale+(scale*0.2), scale, scale+(scale*0.2));
  
   
   }, undefined, function ( error ) {
   
       console.error( error );    
   
   });

   const cameraBody = new CANNON.Body({
    mass: 0,
    shape: new CANNON.Box(new CANNON.Vec3(0.1, 0.1, 0.1))
});
world.addBody(cameraBody);


   

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

    if ( moveForward || moveBackward ) velocity.z -= direction.z * 150 * delta;
    if ( moveLeft || moveRight ) velocity.x -= direction.x * 150  * delta;

    controls.moveRight(-velocity.x * delta);
    controls.moveForward(-velocity.z * delta);

    cameraBody.position.copy(controls.getObject().position);



    prevTime = time;

    world.step(1 / 60);

   
    renderer.render(scene, camera);
   ;
}

animate();


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
  

