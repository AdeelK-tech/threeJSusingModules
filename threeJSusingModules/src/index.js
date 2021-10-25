import * as THREE from 'three'
var scene = new THREE.Scene()

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 4

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({ antialias: true })

// Configure renderer clear color
renderer.setClearColor('#000000')

// Configure renderer size
renderer.setSize(window.innerWidth, window.innerHeight)

// Append Renderer to DOM
document.body.appendChild(renderer.domElement)

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
var geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
var material = new THREE.MeshBasicMaterial({ color: '#433F81' })
var cube = new THREE.Mesh(geometry, material)

// Add cube to Scene
scene.add(cube)

// Render Loop

// const newcube=cube.clone();
// newcube.position.x =3;
// scene.add(newcube)
// var render = function () {
//   requestAnimationFrame(render)

//   // cube.rotation.x += 0.01
//   // cube.rotation.y += 0.01

//   // Render the scene
//   renderer.render(scene, camera)
// }


function render(){
  let t=0;
  for(let i=0;i<10;i++){
    const newCube=cube.clone();
    newCube.rotation.z=t;
    newCube.translateY(2.0);
    scene.add(newCube)
    renderer.render(scene,camera);
    t=t+Math.PI/5;
}
  }
  
render();