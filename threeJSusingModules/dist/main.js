/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\nvar scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene()\r\n\r\n// Create a basic perspective camera\r\nvar camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(\r\n  75,\r\n  window.innerWidth / window.innerHeight,\r\n  0.1,\r\n  1000\r\n)\r\ncamera.position.z = 4\r\n\r\n// Create a renderer with Antialiasing\r\nvar renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ antialias: true })\r\n\r\n// Configure renderer clear color\r\nrenderer.setClearColor('#000000')\r\n\r\n// Configure renderer size\r\nrenderer.setSize(window.innerWidth, window.innerHeight)\r\n\r\n// Append Renderer to DOM\r\ndocument.body.appendChild(renderer.domElement)\r\n\r\n// ------------------------------------------------\r\n// FUN STARTS HERE\r\n// ------------------------------------------------\r\n\r\n// Create a Cube Mesh with basic material\r\nvar geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(0.2, 0.2, 0.2)\r\nvar material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({ color: '#433F81' })\r\nvar cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material)\r\n\r\n// Add cube to Scene\r\nscene.add(cube)\r\n\r\n// Render Loop\r\n\r\n// const newcube=cube.clone();\r\n// newcube.position.x =3;\r\n// scene.add(newcube)\r\n// var render = function () {\r\n//   requestAnimationFrame(render)\r\n\r\n//   // cube.rotation.x += 0.01\r\n//   // cube.rotation.y += 0.01\r\n\r\n//   // Render the scene\r\n//   renderer.render(scene, camera)\r\n// }\r\n\r\n\r\nfunction render(){\r\n  let t=0;\r\n  for(let i=0;i<10;i++){\r\n    const newCube=cube.clone();\r\n    newCube.rotation.z=t;\r\n    newCube.translateY(2.0);\r\n    scene.add(newCube)\r\n    renderer.render(scene,camera);\r\n    t=t+Math.PI/5;\r\n}\r\n  }\r\n  \r\nrender();\n\n//# sourceURL=webpack://threejsusingmodules/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;