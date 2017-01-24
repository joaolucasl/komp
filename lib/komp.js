var Komp =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.h = exports.render = undefined;
	
	var _render = __webpack_require__(1);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _h = __webpack_require__(4);
	
	var _h2 = _interopRequireDefault(_h);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.render = _render2.default;
	exports.h = _h2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _diff = __webpack_require__(2);
	
	var _diff2 = _interopRequireDefault(_diff);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var render = function render(vnode, root) {
	  return (0, _diff2.default)(vnode, root);
	};
	
	exports.default = render;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _node = __webpack_require__(3);
	
	var _node2 = _interopRequireDefault(_node);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var diff = function diff(newNode, root /* , oldNode = vNode()*/) {
	  var dom = (0, _node2.default)(newNode);
	  root.parentNode.replaceChild(dom, root);
	};
	
	exports.default = diff;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var fromVNode = function fromVNode(vNode) {
	  if (typeof vNode === 'string') {
	    return document.createTextNode(vNode);
	  }
	  var node = document.createElement(vNode.name);
	  Object.keys(vNode.attr).forEach(function (key) {
	    return node.setAttribute(key, vNode.attr[key]);
	  });
	
	  var children = vNode.children || [];
	  children.forEach(function (child) {
	    return node.appendChild(fromVNode(child));
	  });
	  return node;
	};
	
	exports.default = fromVNode;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vnode = __webpack_require__(5);
	
	var _vnode2 = _interopRequireDefault(_vnode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// const h = (tag, attr, ...children) => {
	//   if (typeof tag === 'function') {
	//     const instance = tag()
	
	//     if (typeof instance.render === 'function') {
	//       return h(instance.render())
	//     }
	//   }
	
	//   if (typeof tag === 'string') {
	//     return vNode(tag, attr, children)
	//   }
	// }
	
	var h = function h(tag, attr, children) {
	  if (children && Array.isArray(children) && children.length > 0) {
	    return (0, _vnode2.default)(tag, attr, children);
	  }
	  if (typeof children === 'string') {
	    return (0, _vnode2.default)(tag, attr, [children]);
	  }
	  return (0, _vnode2.default)(tag, attr, []);
	};
	
	exports.default = h;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var vNode = function vNode() {
	  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  return {
	    name: name,
	    attr: attr,
	    children: children
	  };
	};
	
	exports.default = vNode;

/***/ }
/******/ ]);
//# sourceMappingURL=komp.js.map