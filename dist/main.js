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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  display: grid;\n  grid-template:   7vh repeat(4, 22vh) 3vh / 1fr repeat(3, 1.2fr);\n  overflow: hidden;  \n  background-color: rgba(174, 174, 174, 0.527);\n  }\n\n\n\n#topBody {\n  grid-row: 1 / 2;\n  grid-column: 1 / 5;\n  align-self: center;\n  justify-self: center;\n  font-size: xx-large;\n  font-weight: bolder;\n  background-color: rgba(0, 0, 0, 0.0);\n  text-align: center;\n  text-justify: center;\n  height: 100%;\n  width: 100%;\n  border-bottom: 1px solid black;\n}\n\n#sidebar {\n  grid-row: 2 / 6;\n  grid-column: 1 / 2;\n  padding: 0 5% 0 5%; \n  background-color: rgba(151, 151, 151, 0.132);\n  border-right: 1px solid black\n}\n\n#board {\n  /*display: flex;\n  */\n  grid-row: 2 / 6;\n  grid-column: 2 / 5;\n\n  display: grid;\n  grid-template: 0.8fr 10fr / repeat(2, 1fr);\n  gap: 3%;\n  background-color: rgba(151, 151, 151, 0.132);\n}\n\n#footer {\n  grid-row: 6 / 7;\n  grid-column: 1 / 5;\n  text-align: center;\n  text-justify: center;\n  align-self: center;\n  justify-self: center;\n  border-top: 1px solid black;\n  height: 100%;\n  width: 100%;\n}\n\nul {\n  text-decoration: none;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\nli{\n  margin: 1% 0 1% 0;\n  transition: margin 0.3s;\n  align-self: center;\n}\n\nli:hover {\n  cursor: pointer;\n  margin: 2% 0 2% 0;\n  /*font-size: larger;*/\n  font-weight: bolder;\n}\n\n#RemoveProjectButton{\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  justify-items: center;\n  align-self: center;\n  padding: 0%;\n  margin: 1% 0 1% 0;\n  transition: font-size 0.3s;\n}\n\n#RemoveProjectButton:hover{\n  cursor: pointer;\n  font-size: larger;\n  margin: 2% 0 2% 0;\n}\n\n\n.projectContainer {\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  margin: 1% 0 1% 0;\n  transition: margin 0.3s;\n  align-self: center;\n}\n\n.projectContainer:hover {\n  cursor: pointer;\n  margin: 2% 0 2% 0;\n  font-size: larger;\n  font-weight: bolder;\n}\n\n#newProjectContainer{\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  margin: 5% 0 0 0;\n  \n}\n\n#labelNewProject{\n  grid-column: 1 / 5;\n  justify-self: center;\n  align-self: center;\n  font-size: large;\n}\n\n#ProjectName{\n  grid-column: 1 / 5;\n  justify-self: center;\n  align-self: center;\n  text-align: center; \n  text-justify: center;\n /* background-color: rgba(0, 0, 0, 0); \n  border: 1px solid black; */\n}\n\n#projects{\n  grid-column: 5 / 6;\n  grid-row: 1 / 3;\n  justify-self: center;\n  align-self: center;\n  transition: font-size 0.3s ; \n  font-size: medium ;\n  border: 0;\n  margin: 2%;\n  padding: 0;\n  height: 80%;\n  width: 80%;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n#projects:hover{\n  font-size: x-large;\n}\n\n#newTaskContainer{\n  grid-row: 1 / 2;\n  grid-column: 1 / 3;\n  display: grid;\n  grid-template: 1fr 2fr / repeat(3, 1fr);\n  align-self: center;\n  justify-self: center;\n  border-bottom: 1px solid black;\n}\n\n#projectTitle {\n  grid-column: 1 / 4;\n  align-self: center;\n  justify-self: center;\n  font-size: xx-large;\n}\n\n#insertTask {\n  align-self: center;\n  justify-self: center;\n  grid-column: 3 / 4;\n  grid-row: 2 / 3;\n  height: 80%;\n  width: 30%;\n  font-size: larger;\n  transition: font-size 0.3s;\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n#insertTask:hover {\n  font-size: xx-large;\n}\n\n#labelTaskName{\n  align-self: center;\n  justify-self: center;\n  font-size: large;\n}\n\n\n#taskName{\n  align-self: center;\n  justify-self: center;\n  font-size: large;\n  align-content: center;\n  justify-content: center ;\n  text-align: center; \n  text-justify: center;\n}\n\n.taskBox{\n  border: 1px solid black;\n  display: grid;\n  grid-template: repeat(5, 1fr) /  repeat(6, 1fr);\n  padding: 1% 1% 1% 1%;\n  gap: 1%;\n  width: 250px;\n  background: rgb(230,230,230);\n}\n\n\n.taskBox>div{\n  grid-row: 1 / 2;\n  grid-column: 1 / 6;\n  align-self: center;\n  justify-self: center ;\n  font-size: larger;\n  font-weight: bolder;\n}\n\n.taskDescrip{\n  grid-row: 2 / 5;\n  grid-column: 1 / 6;\n  align-self: center;\n  justify-self: center ;\n  height: 100%;\n  width: 100%;\n  text-align: center; \n  text-justify: center;\n  resize: none;\n}\n\n.check{\n  grid-row: 1 / 3;\n  grid-column: 6 / 7;\n  align-self: center;\n  justify-self: center ;\n  padding: 0;\n}\n\n.RemoveTaskButton{\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  grid-row: 3 / 6;\n  grid-column: 6 / 7;\n  align-self: center;\n  justify-self: center ;\n  text-align: center;\n  text-justify: center;\n  height: 100%;\n  width: 100%;\n  transition: font-size 0.3s;\n  font-size: larger;\n  padding: 0;\n}\n\n.RemoveTaskButton:hover{\n  font-size: xx-large;\n}\n\n.dueDate{\n  grid-row: 6 / 7;\n  grid-column: 1/ 4;\n  align-self: center;\n  justify-self: center ;\n  height: 100%;\n  width: 100%;  \n  text-align: center; \n  text-justify: center;\n}\n\n.priority{\n  grid-row: 6 / 7;\n  grid-column: 5 / 7;\n  align-self: center;\n  justify-self: center ;\n  height: 100%;\n  width: 100%;\n  \n  text-align: center; \n  text-justify: center;\n}\n\n.check{\n  height: 50%;\n  width: 50px;\n  transition: height 0.3s;\n}\n\n.check:hover{\n  height: 100%;\n}\n\n#tasksContainer{\n  grid-row: 2 / 3;\n  grid-column: 1 / 3;\n\n  display: flex;\n  flex: 2 / 0.6 / auto;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 3%;\n  overflow-y: scroll;\n  padding: 0 0 1% 0;  \n}\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey; \n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5); \n  border-radius: 10px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.8);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _localStorageOperations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageOperations */ \"./src/localStorageOperations.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nconst projectList = document.querySelector(\".projectList\");\nconst newProjectName = document.querySelector(\"#ProjectName\");\nconst dashboard = document.querySelector(\"#board\");\n\nconst buttonAddNewProjects = document.querySelector(\"#projects\");\nbuttonAddNewProjects.addEventListener(\"click\", insertNewProject);\nloadProjects();\n\nfunction getTask() {\n  const tarea = document.querySelector(\"#taskName\");\n  return tarea.value;\n}\n\nfunction getProject() {\n  const project = document.querySelector(\"#projectTitle\");\n  return project.textContent;\n}\n\nfunction insertTask() {\n  let tarea = getTask();\n  let project = getProject();\n  if (tarea != \"\") {\n    let newTask = new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](tarea);\n    (0,_localStorageOperations__WEBPACK_IMPORTED_MODULE_1__.addNewTask)(project, JSON.stringify(newTask));\n  }\n  loadDashboard(project);\n}\n\nfunction insertNewProject() {\n  let name = newProjectName.value;  \n  if (name) {\n    (0,_localStorageOperations__WEBPACK_IMPORTED_MODULE_1__.addNewProject)(name);\n    loadProjects();\n  }\n}\n\nfunction loadDashboardFor(e) {  \n  loadDashboard(e.target.innerText);  \n}\n\nfunction loadDashboard(projectName) {\n  while (dashboard.childNodes.length) {\n    dashboard.removeChild(dashboard.lastChild);\n  }\n  if (projectName){\n    const newTaskContainer = document.createElement(\"div\");\n    newTaskContainer.setAttribute(\"id\", \"newTaskContainer\");\n\n    const projectTitle = document.createElement(\"div\");\n    projectTitle.setAttribute(\"id\", \"projectTitle\");\n\n    const titleLabel = document.createElement(\"label\");\n    titleLabel.setAttribute(\"for\", \"taskName\");\n    titleLabel.setAttribute(\"id\", \"labelTaskName\");\n    titleLabel.textContent = \"Task Name:\";\n\n    const taskName = document.createElement(\"input\");\n    taskName.setAttribute(\"type\", \"text\");\n    taskName.setAttribute(\"id\", \"taskName\");\n\n    const insertTaskButton = document.createElement(\"button\");\n    insertTaskButton.setAttribute(\"id\", \"insertTask\");\n    insertTaskButton.textContent = \"✚\";\n    insertTaskButton.addEventListener(\"click\", insertTask);   \n  \n    projectTitle.textContent = projectName;\n\n    newTaskContainer.appendChild(projectTitle);\n    newTaskContainer.appendChild(titleLabel);\n    newTaskContainer.appendChild(taskName);\n    newTaskContainer.appendChild(insertTaskButton);\n\n    dashboard.appendChild(newTaskContainer);\n\n    const tasksContainer = document.createElement(\"div\");\n    tasksContainer.setAttribute(\"id\", \"tasksContainer\");\n\n    dashboard.appendChild(tasksContainer);\n    \n    loadTasks();\n  }\n}\n\nfunction loadProjects() {\n  while (projectList.childNodes.length) {\n    projectList.removeChild(projectList.lastChild);\n  }\n  (0,_localStorageOperations__WEBPACK_IMPORTED_MODULE_1__.readAllProjects)().forEach((project) => {\n    if(project != \"\"){\n      const projectContainer = document.createElement(\"div\");\n      projectContainer.setAttribute(\"class\", \"projectContainer\");\n\n      const newProjectItem = document.createElement(\"li\");\n      newProjectItem.addEventListener(\"click\", loadDashboardFor);    \n      newProjectItem.textContent = project;\n      projectContainer.appendChild(newProjectItem);\n\n      const RemoveProjectButton = document.createElement(\"button\");\n      RemoveProjectButton.setAttribute(\"id\", \"RemoveProjectButton\");\n      RemoveProjectButton.textContent = \"🗑️\";\n      RemoveProjectButton.project = project;\n      RemoveProjectButton.addEventListener(\"click\", removeProjectCall);\n      projectContainer.appendChild(RemoveProjectButton);\n\n      projectList.appendChild(projectContainer);\n\n    }    \n  });\n}\n\nfunction loadTasks() {\n  let project = getProject();\n  let tasks = (0,_localStorageOperations__WEBPACK_IMPORTED_MODULE_1__.readAllTask)(project);\n\n  const tasksContainer = document.querySelector(\"#tasksContainer\");\n\n  tasks.forEach((task) => {\n    const taskObject = Object.assign(new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), JSON.parse(task));\n    const taskbox = document.createElement(\"div\");\n    taskbox.classList.add(\"taskBox\");\n\n    const Tasktitle = document.createElement(\"div\");\n    Tasktitle.textContent = taskObject.title;\n    taskbox.appendChild(Tasktitle);\n\n    const taskDescrip = document.createElement(\"textarea\");\n    taskDescrip.classList.add(\"taskDescrip\");\n    taskDescrip.setAttribute(\"type\", \"text\");\n    taskDescrip.setAttribute(\"placeholder\", \"Description\");\n    taskDescrip.setAttribute(\"maxlength\", \"140\");\n    taskDescrip.setAttribute(\"cols\", \"40\");\n    taskDescrip.setAttribute(\"rows\", \"4\");\n    ////\n    taskDescrip.param = \"description\";\n    taskDescrip.project = project;\n    taskDescrip.task = taskObject.title;\n    taskDescrip.addEventListener(\"change\", insertParamsV2);\n    ///\n    taskDescrip.value = taskObject.description ? taskObject.description : \"\";\n\n\n    \n    taskbox.appendChild(taskDescrip);\n\n    const dueDate = document.createElement(\"input\");\n    dueDate.classList.add(\"dueDate\");\n    dueDate.setAttribute(\"type\", \"date\");\n    dueDate.value = taskObject.dueDate ? taskObject.dueDate : \"\";\n    //\n    dueDate.param = \"dueDate\";\n    dueDate.project = project;\n    dueDate.task = taskObject.title;\n    dueDate.addEventListener(\"change\", insertParamsV2);\n    //\n    taskbox.appendChild(dueDate);\n\n    const priority = document.createElement(\"input\");\n    priority.classList.add(\"priority\");\n    priority.setAttribute(\"type\", \"text\");\n    priority.setAttribute(\"maxlength\", \"15\");\n    priority.setAttribute(\"placeholder\", \"Priority\");\n    priority.value = taskObject.priority ? taskObject.priority : \"\";\n    //\n    priority.param = \"priority\";\n    priority.project = project;\n    priority.task = taskObject.title;\n    priority.addEventListener(\"change\", insertParamsV2);\n    //\n    taskbox.appendChild(priority);\n\n    const checkTask = document.createElement(\"input\");\n    checkTask.classList.add(\"check\");\n    checkTask.setAttribute(\"type\", \"checkbox\");\n    checkTask.checked = taskObject.check;\n    //\n    checkTask.param = \"check\";\n    checkTask.project = project;\n    checkTask.task = taskObject.title;\n    checkTask.addEventListener(\"change\", insertParamsV2);\n    //\n    taskbox.appendChild(checkTask);\n \n    const RemoveTaskButton = document.createElement(\"button\");\n    RemoveTaskButton.setAttribute(\"class\", \"RemoveTaskButton\");\n    RemoveTaskButton.textContent = \"🗑️\";\n    RemoveTaskButton.project = project;\n    RemoveTaskButton.task = taskObject.title;\n    RemoveTaskButton.addEventListener(\"click\", removeTaskCall);\n    taskbox.appendChild(RemoveTaskButton); \n\n    tasksContainer.appendChild(taskbox);\n  });\n}\n\nfunction insertParamsV2(e) {\n  const project = e.currentTarget.project;\n  const task = e.currentTarget.task;\n  const param = e.currentTarget.param;\n  const value = e.currentTarget.value;\n  const checked = e.currentTarget.checked;\n  (0,_localStorageOperations__WEBPACK_IMPORTED_MODULE_1__.addParametersV2)(project, task, param, value, checked);\n}\n\nfunction removeTaskCall(e){\n  const project = e.currentTarget.project;\n  const task = e.currentTarget.task;\n  (0,_localStorageOperations__WEBPACK_IMPORTED_MODULE_1__.removeTask) (project,task);\n  loadDashboard(project);\n}\n\nfunction removeProjectCall(e){\n  const project = e.currentTarget.project;\n  (0,_localStorageOperations__WEBPACK_IMPORTED_MODULE_1__.RemoveProject)(project);\n  loadProjects();\n  if (getProject() ==  project){    \n    loadDashboard();\n  }\n}\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/localStorageOperations.js":
/*!***************************************!*\
  !*** ./src/localStorageOperations.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RemoveProject: () => (/* binding */ RemoveProject),\n/* harmony export */   addNewProject: () => (/* binding */ addNewProject),\n/* harmony export */   addNewTask: () => (/* binding */ addNewTask),\n/* harmony export */   addParametersV2: () => (/* binding */ addParametersV2),\n/* harmony export */   readAllProjects: () => (/* binding */ readAllProjects),\n/* harmony export */   readAllTask: () => (/* binding */ readAllTask),\n/* harmony export */   removeTask: () => (/* binding */ removeTask)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\nfunction addNewTask(project, task) {\n  let projectTasks = localStorage[project];\n  if (\n    projectTasks != undefined &&\n    tasksCheckName(projectTasks, JSON.parse(task).title)\n  ) {\n    projectTasks = localStorage[project];\n    projectTasks += \">:/|/:<\" + task;\n    localStorage[project] = projectTasks;\n  } else if (projectTasks == undefined) {\n    localStorage[project] = task;\n  }\n}\n\nfunction tasksCheckName(tasks, taskNameToCheck) {\n  let nameItsOK = true;\n  tasks = tasks.split(\">:/|/:<\");\n  tasks.forEach((task) => {\n    let taskComprare = JSON.parse(task);\n    nameItsOK &= taskComprare.title != taskNameToCheck ? true : false;\n  });\n  return nameItsOK;\n}\n\nfunction readAllTask(project) {\n  if (localStorage[project] != undefined) {\n    let projectTasks = localStorage[project];\n    return projectTasks.split(\">:/|/:<\");\n  }\n}\n\nfunction removeTask(project, taskName) {\n  let tasks = readAllTask(project);\n  let newTasks;\n  for (let i = 0; i < tasks.length; i++) {\n    if (taskName == JSON.parse(tasks[i]).title) {\n      tasks.splice(i, 1);\n    }\n    if (i == 0 && tasks[i] != undefined) {\n      newTasks = tasks[i];\n    } else if (tasks[i] != undefined) {\n      newTasks += \">:/|/:<\" + tasks[i];\n    } else {\n      delete localStorage[project];\n    }\n  }\n  if (newTasks != undefined) {\n    localStorage[project] = newTasks;\n  }\n  return newTasks;\n}\n\nfunction readAllProjects() {\n  return localStorage[\"projects\"].split(\",\");\n}\n\nfunction addNewProject(projectName) {\n  let projects;\n  if (localStorage.projects != undefined && projectsCheckName(projectName)) {\n    projects = localStorage.projects;\n    projects = projects.split(\",\");\n    projects.push(projectName);\n    localStorage.projects = projects;\n  } else if (projectsCheckName(projectName))\n    localStorage.projects = projectName;\n}\n\nfunction projectsCheckName(projectName) {\n  let projects;\n  let nameItsOK = true;\n  if (projectName != \"projects\") {\n    if (localStorage.projects != undefined) {\n      projects = localStorage.projects;\n      projects = projects.split(\",\");\n      projects.forEach((project) => {\n        nameItsOK &= project != projectName ? true : false;\n      });\n    }\n  } else {\n    nameItsOK = false;\n  }\n  return nameItsOK;\n}\n\nfunction addParametersV2(project, task, param, value, checked) {\n  const tasks = readAllTask(project);\n  let newTasks;\n  for (let i = 0; i < tasks.length; i++) {\n    if (task == JSON.parse(tasks[i]).title) {\n      const taskObject = Object.assign(new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), JSON.parse(tasks[i]));\n      switch (param) {\n        case \"description\":\n          taskObject.setDescription(value);\n          break;\n        case \"dueDate\":\n          taskObject.setDueDate(value);\n          break;\n        case \"priority\":\n          taskObject.setPriority(value);\n          break;\n        case \"check\":\n          taskObject.setCheck(checked);\n          break;\n      }\n      let jsonTask = JSON.stringify(taskObject);\n      tasks.splice(i, 1, jsonTask);\n    }\n    if (i == 0) {\n      newTasks = tasks[i];\n    } else {\n      newTasks += \">:/|/:<\" + tasks[i];\n    }\n  }\n  localStorage[project] = newTasks;\n  return newTasks;\n}\n\nfunction RemoveProject(project) {\n  delete localStorage[project];\n\n  const projects = readAllProjects();\n  for (let i = 0; i < projects.length; i++) {\n    if (projects[i] == project) {\n      projects.splice(i, 1);\n    }\n  }\n  localStorage[\"projects\"] = projects;\n}\n\n\n//# sourceURL=webpack://todolist/./src/localStorageOperations.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  title;\n  description;\n  dueDate;\n  priority;\n  check;\n  constructor(title) {\n    this.title = title;\n  }\n\n  setDescription(description) {\n    this.description = description;\n  }\n\n  setDueDate(dueDate) {\n    this.dueDate = dueDate;\n  }\n\n  setPriority(priority) {\n    this.priority = priority;\n  }\n\n  setCheck(check) {\n    this.check = check;\n  }\n}\n\n\n//# sourceURL=webpack://todolist/./src/task.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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