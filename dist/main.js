/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  /* border: solid black; */
  box-sizing: border-box;
  font-family: 'Noto Sans Mongolian', sans-serif;
}
h1, h2, h3, h4, h5 {
  margin: 0;
}
.hidden {
  display: none;
}
body, html {
  margin: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100vw;
  background: radial-gradient(circle at 10% 20%, rgb(253, 239, 132) 0%, rgb(247, 198, 169) 54.2%, rgb(21, 186, 196) 100.3%);
}
h2 {
  font-size: 5rem;
}

main {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  min-height: 100vh;
}
  nav {
    display: flex;
    justify-content: center;
  }
   nav button {
    flex: 1;
    border: none;
    /* border-bottom: solid black; */
    border-radius: 5px 5px 0 0;
    background-color: transparent;
   }
   nav button.selected {
    /* border: solid black; */
    border-bottom: none;
    background-color: rgba(177, 177, 177, 0.3);
   }


  .todayWeather {
    display: grid;
    padding: 5%;
    grid-template-rows: 0.5fr 0.5fr repeat(2, 1fr);
    grid-template-columns: 1fr 2fr;
    align-items: center;
  }
    .locationChange {
      display: flex;
      background-color: transparent;
      border: none;
      padding: 0;
      margin: 0;
      aspect-ratio: 1;
      height: fit-content;
    }
    .locationChange:hover {
      border: solid black;
      border-radius: 50%;
    }
    .locationInput {
      grid-row: 1;
      grid-column: 1 / span 2;
    }
      .locationInput input {
        width: 85%;
      }
      .locationInput button {
        padding: 0;
        margin: 0;
        width: 10%;
        height: fit-content;
      }
    .location {
      grid-row: 1;
      grid-column: 1 / span 2;
    }
    .currentConditionText {
      grid-row: 2;
    }
    .currentTemp {
      grid-row: 2 / 5;
      grid-column: 2 / span 2;
    }
    .currentConditionImage {
      height: 100%;
      grid-row: 3
    }
    .otherInfo {
      grid-row: 4;
    }
  
  .futureWeather {
    display: flex;
    flex-direction: column;
    gap: 5px;
    /* border: solid black; */
    /* border-top: 0; */
    background-color: rgba(177, 177, 177, 0.3);
  }
    .futureWeatherDayContent {
      display: grid;
      padding: 0 5% 0 5%;
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(4, 1fr);
    }
      .dayCondition {
        grid-column: 1 / 5;
      }
    .futureWeatherHourContent {
      display: flex;
      gap: 5px;
      overflow: scroll;
    }
      .hourContainer {
        border: solid rgba(177, 177, 177, 0.562);
        border-radius: 5px;
      }
`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,8CAA8C;AAChD;AACA;EACE,SAAS;AACX;AACA;EACE,aAAa;AACf;AACA;EACE,SAAS;EACT,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,yHAAyH;AAC3H;AACA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,iBAAiB;AACnB;EACE;IACE,aAAa;IACb,uBAAuB;EACzB;GACC;IACC,OAAO;IACP,YAAY;IACZ,gCAAgC;IAChC,0BAA0B;IAC1B,6BAA6B;GAC9B;GACA;IACC,yBAAyB;IACzB,mBAAmB;IACnB,0CAA0C;GAC3C;;;EAGD;IACE,aAAa;IACb,WAAW;IACX,8CAA8C;IAC9C,8BAA8B;IAC9B,mBAAmB;EACrB;IACE;MACE,aAAa;MACb,6BAA6B;MAC7B,YAAY;MACZ,UAAU;MACV,SAAS;MACT,eAAe;MACf,mBAAmB;IACrB;IACA;MACE,mBAAmB;MACnB,kBAAkB;IACpB;IACA;MACE,WAAW;MACX,uBAAuB;IACzB;MACE;QACE,UAAU;MACZ;MACA;QACE,UAAU;QACV,SAAS;QACT,UAAU;QACV,mBAAmB;MACrB;IACF;MACE,WAAW;MACX,uBAAuB;IACzB;IACA;MACE,WAAW;IACb;IACA;MACE,eAAe;MACf,uBAAuB;IACzB;IACA;MACE,YAAY;MACZ;IACF;IACA;MACE,WAAW;IACb;;EAEF;IACE,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,yBAAyB;IACzB,mBAAmB;IACnB,0CAA0C;EAC5C;IACE;MACE,aAAa;MACb,kBAAkB;MAClB,kCAAkC;MAClC,qCAAqC;IACvC;MACE;QACE,kBAAkB;MACpB;IACF;MACE,aAAa;MACb,QAAQ;MACR,gBAAgB;IAClB;MACE;QACE,wCAAwC;QACxC,kBAAkB;MACpB","sourcesContent":["* {\n  /* border: solid black; */\n  box-sizing: border-box;\n  font-family: 'Noto Sans Mongolian', sans-serif;\n}\nh1, h2, h3, h4, h5 {\n  margin: 0;\n}\n.hidden {\n  display: none;\n}\nbody, html {\n  margin: 0;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 100vw;\n  background: radial-gradient(circle at 10% 20%, rgb(253, 239, 132) 0%, rgb(247, 198, 169) 54.2%, rgb(21, 186, 196) 100.3%);\n}\nh2 {\n  font-size: 5rem;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 500px;\n  min-height: 100vh;\n}\n  nav {\n    display: flex;\n    justify-content: center;\n  }\n   nav button {\n    flex: 1;\n    border: none;\n    /* border-bottom: solid black; */\n    border-radius: 5px 5px 0 0;\n    background-color: transparent;\n   }\n   nav button.selected {\n    /* border: solid black; */\n    border-bottom: none;\n    background-color: rgba(177, 177, 177, 0.3);\n   }\n\n\n  .todayWeather {\n    display: grid;\n    padding: 5%;\n    grid-template-rows: 0.5fr 0.5fr repeat(2, 1fr);\n    grid-template-columns: 1fr 2fr;\n    align-items: center;\n  }\n    .locationChange {\n      display: flex;\n      background-color: transparent;\n      border: none;\n      padding: 0;\n      margin: 0;\n      aspect-ratio: 1;\n      height: fit-content;\n    }\n    .locationChange:hover {\n      border: solid black;\n      border-radius: 50%;\n    }\n    .locationInput {\n      grid-row: 1;\n      grid-column: 1 / span 2;\n    }\n      .locationInput input {\n        width: 85%;\n      }\n      .locationInput button {\n        padding: 0;\n        margin: 0;\n        width: 10%;\n        height: fit-content;\n      }\n    .location {\n      grid-row: 1;\n      grid-column: 1 / span 2;\n    }\n    .currentConditionText {\n      grid-row: 2;\n    }\n    .currentTemp {\n      grid-row: 2 / 5;\n      grid-column: 2 / span 2;\n    }\n    .currentConditionImage {\n      height: 100%;\n      grid-row: 3\n    }\n    .otherInfo {\n      grid-row: 4;\n    }\n  \n  .futureWeather {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    /* border: solid black; */\n    /* border-top: 0; */\n    background-color: rgba(177, 177, 177, 0.3);\n  }\n    .futureWeatherDayContent {\n      display: grid;\n      padding: 0 5% 0 5%;\n      grid-template-rows: repeat(3, 1fr);\n      grid-template-columns: repeat(4, 1fr);\n    }\n      .dayCondition {\n        grid-column: 1 / 5;\n      }\n    .futureWeatherHourContent {\n      display: flex;\n      gap: 5px;\n      overflow: scroll;\n    }\n      .hourContainer {\n        border: solid rgba(177, 177, 177, 0.562);\n        border-radius: 5px;\n      }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/domController.js":
/*!*********************************!*\
  !*** ./src/js/domController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentWeatherUpdater: () => (/* binding */ currentWeatherUpdater),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   locationChangeButtonsInit: () => (/* binding */ locationChangeButtonsInit)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/js/getData.js");


function elementBuilder(element, classList, textContent, dataName) {  //element builder copied and modified from previous project.
  const xelement = document.createElement(element);
  if (classList != '') {
    if (typeof classList == 'object') {
      classList.forEach(classLabel => {
        xelement.classList.add(classLabel);
      });
    } else xelement.classList.add(classList);
  }
  if (textContent != '') {
    xelement.value = textContent;
    xelement.textContent = textContent;
  }
  if (dataName != '') xelement.dataset.element = dataName;
  return xelement;
}

function currentWeatherUpdater(day, forecast) {
  const location = document.querySelector('.location');
  const currentTemp = document.querySelector('.currentTemp');
  const currentWind = document.querySelector('.currentWind');
  const currentHumidity = document.querySelector('.currentHumidity');
  const currentConditionText = document.querySelector('.currentConditionText');
  const currentConditionImage = document.querySelector('.currentConditionImage');

  location.textContent = `${forecast.location.name}, ${forecast.location.region}`;
  currentTemp.textContent = `${forecast.current.temp_c}°C`;
  currentWind.textContent = `${Math.round(forecast.current.wind_kph)} km/h`;
  currentHumidity.textContent = `${forecast.current.humidity}%`;
  currentConditionText.textContent = forecast.current.condition.text;
  currentConditionImage.src = forecast.current.condition.icon;
}

function dayAverageContentBuilder(day, forecast) {
  const elements = [
    elementBuilder('h3', 'dayCondition', forecast.forecast.forecastday[day].day.condition.text, ''),
    // elementBuilder('img', 'dayAverageImg', '', ''),
    elementBuilder('h4', 'dayMaxTempLabel', 'Max', ''),
    elementBuilder('h4', 'dayMaxTempValue', `${Math.round(forecast.forecast.forecastday[day].day.maxtemp_c)}°C`, ''),
    elementBuilder('h4', 'dayHumidityLabel', 'Hum', ''),
    elementBuilder('h4', 'dayHumidityValue', `${forecast.forecast.forecastday[day].day.avghumidity}%`, ''),
    elementBuilder('h4', 'dayMinTempLabel', `Min`, ''),
    elementBuilder('h4', 'dayMinTempValue', `${Math.round(forecast.forecast.forecastday[day].day.mintemp_c)}°C`, ''),
    elementBuilder('h4', 'dayWindLabel', `Wind`, ''),
    elementBuilder('h4', 'dayWindValue', `${Math.round(forecast.forecast.forecastday[day].day.maxwind_kph)}km/h`, '')
  ];
  // elements[1].src = forecast.forecast.forecastday[day].day.condition.icon; //this does not feel like an ideal solution.
  return elements;
}
function hourlyContentBuilder(day, forecast) {
  let hourContainers = [];
  const date = new Date()
  const currentHour = date.getHours();
  let fromHour = 0; //determines which hour to build the hourlys from.
  if (day == 0) fromHour = currentHour + 1;
  for(fromHour; forecast.hour.length > fromHour; fromHour++) {
    const hourContainer = elementBuilder('div', 'hourContainer', '', '');
    const hourLabel = elementBuilder('h3', '', '', '');
      (fromHour < 10) ?
        hourLabel.textContent = `0${fromHour}h`:
        hourLabel.textContent = `${fromHour}h`;
    const hourTemp = elementBuilder('h4', '', `${Math.round(forecast.hour[fromHour].temp_c)}°C`, '');
    // const hourRainChance = elementBuilder('h5', '', `${forecast.hour[i].chance_of_rain}`, '');
    const hourWindSpeed = elementBuilder('h5', '', `${Math.round(forecast.hour[fromHour].wind_kph)}km/h`, '');
    const hourIcon = elementBuilder('img', 'hourIcon', '', '');
      hourIcon.src = forecast.hour[fromHour].condition.icon;
    hourContainer.append(hourLabel, hourTemp, hourWindSpeed, hourIcon);
    hourContainers.push(hourContainer);
  }
  return hourContainers;
}
function tabEventListeners(forecast) {
  const tabs = document.querySelectorAll('.tabs button');
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      tabSwitcher(e.target.dataset.day , forecast);
    })
  });
}
function tabSwitcher(day, forecast) {
  const tabs = document.querySelectorAll('.tabs button');
  tabs.forEach(tab => {
    tab.classList.remove('selected');
    if (tab.dataset.day == day) tab.classList.add('selected');
  });

  currentWeatherUpdater(0, forecast);
  const dailyAverageContentContainer = document.querySelector('.futureWeatherDayContent');
  dailyAverageContentContainer.innerHTML = '';
  const dailyAverageContent = dayAverageContentBuilder(day, forecast);
  dailyAverageContentContainer.append(...dailyAverageContent);

  const hourlyContentContainer = document.querySelector('.futureWeatherHourContent');
  hourlyContentContainer.innerHTML = '';
  const hourlyContent = hourlyContentBuilder(day, forecast.forecast.forecastday[day]);
  hourlyContentContainer.append(...hourlyContent);
}
function tabLabeler() {
  const days = (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getDays)();
  const tabs = document.querySelectorAll('.tabs button');
  tabs.forEach(tab => {
    tab.textContent = days[tab.dataset.day];
  });
}
function locationChangeToggle() {
  const locationInputDiv = document.querySelector('.locationInput');
  locationInputDiv.classList.toggle('hidden');
}
function locationChangeButtonsInit() {
  const settingsButton = document.querySelector('.locationChange');
  settingsButton.addEventListener('click', () => locationChangeToggle());
  const locationInput = document.querySelector('.locationInput input');
  const locationInputButton = document.querySelector('.locationInput button');
  locationInputButton.addEventListener('click', () => {
    init(locationInput.value);
    locationChangeToggle();
    locationInput.value = '';
  })
}

async function init(location = 'nottingham') {
  //days: 0=today, 1=tomorrow, 2=day after
  const forecast = await (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getForecast)(location);
  tabEventListeners(forecast); //attach event listeners to tabs.
  tabLabeler();
  tabSwitcher(0, forecast);
}

/***/ }),

/***/ "./src/js/getData.js":
/*!***************************!*\
  !*** ./src/js/getData.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDays: () => (/* binding */ getDays),
/* harmony export */   getForecast: () => (/* binding */ getForecast)
/* harmony export */ });
 //no longer needed

async function getForecast(location) {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=486e25196a914325a9c154932231009&days=3&q=${location}`);
  const forecastWeather = await response.json();
  return forecastWeather;
}

function getDays() { //gets the next three days of the week
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Monday'
  ]
  const threeDays = ['Today'];
  const today = new Date();
  for (let i = 1; i < 3; i++) {
    threeDays.push(days[today.getDay() + i]);
  }
  return threeDays;
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/js/getData.js");
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domController */ "./src/js/domController.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/style.css */ "./src/style/style.css");





(0,_domController__WEBPACK_IMPORTED_MODULE_1__.init)();
(0,_domController__WEBPACK_IMPORTED_MODULE_1__.locationChangeButtonsInit)();

console.log((0,_getData__WEBPACK_IMPORTED_MODULE_0__.getForecast)('nottingham'))
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEkrQixDQUFDOztBQUV6QjtBQUNQLDBIQUEwSCxTQUFTO0FBQ25JO0FBQ0E7QUFDQTs7QUFFTyxxQkFBcUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUMwQjtBQUN0Qzs7O0FBRzVCLG9EQUFJO0FBQ0oseUVBQXlCOztBQUV6QixZQUFZLHFEQUFXLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9kb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrOyAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogJ05vdG8gU2FucyBNb25nb2xpYW4nLCBzYW5zLXNlcmlmO1xufVxuaDEsIGgyLCBoMywgaDQsIGg1IHtcbiAgbWFyZ2luOiAwO1xufVxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5ib2R5LCBodG1sIHtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEwJSAyMCUsIHJnYigyNTMsIDIzOSwgMTMyKSAwJSwgcmdiKDI0NywgMTk4LCAxNjkpIDU0LjIlLCByZ2IoMjEsIDE4NiwgMTk2KSAxMDAuMyUpO1xufVxuaDIge1xuICBmb250LXNpemU6IDVyZW07XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4gIG5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAgbmF2IGJ1dHRvbiB7XG4gICAgZmxleDogMTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2s7ICovXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICB9XG4gICBuYXYgYnV0dG9uLnNlbGVjdGVkIHtcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrOyAqL1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE3NywgMTc3LCAwLjMpO1xuICAgfVxuXG5cbiAgLnRvZGF5V2VhdGhlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDAuNWZyIHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICAgLmxvY2F0aW9uQ2hhbmdlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBhc3BlY3QtcmF0aW86IDE7XG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIH1cbiAgICAubG9jYXRpb25DaGFuZ2U6aG92ZXIge1xuICAgICAgYm9yZGVyOiBzb2xpZCBibGFjaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgLmxvY2F0aW9uSW5wdXQge1xuICAgICAgZ3JpZC1yb3c6IDE7XG4gICAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcbiAgICB9XG4gICAgICAubG9jYXRpb25JbnB1dCBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICB9XG4gICAgICAubG9jYXRpb25JbnB1dCBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICB9XG4gICAgLmxvY2F0aW9uIHtcbiAgICAgIGdyaWQtcm93OiAxO1xuICAgICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XG4gICAgfVxuICAgIC5jdXJyZW50Q29uZGl0aW9uVGV4dCB7XG4gICAgICBncmlkLXJvdzogMjtcbiAgICB9XG4gICAgLmN1cnJlbnRUZW1wIHtcbiAgICAgIGdyaWQtcm93OiAyIC8gNTtcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAyO1xuICAgIH1cbiAgICAuY3VycmVudENvbmRpdGlvbkltYWdlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGdyaWQtcm93OiAzXG4gICAgfVxuICAgIC5vdGhlckluZm8ge1xuICAgICAgZ3JpZC1yb3c6IDQ7XG4gICAgfVxuICBcbiAgLmZ1dHVyZVdlYXRoZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrOyAqL1xuICAgIC8qIGJvcmRlci10b3A6IDA7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE3NywgMTc3LCAwLjMpO1xuICB9XG4gICAgLmZ1dHVyZVdlYXRoZXJEYXlDb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBwYWRkaW5nOiAwIDUlIDAgNSU7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICB9XG4gICAgICAuZGF5Q29uZGl0aW9uIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyA1O1xuICAgICAgfVxuICAgIC5mdXR1cmVXZWF0aGVySG91ckNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogNXB4O1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB9XG4gICAgICAuaG91ckNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlcjogc29saWQgcmdiYSgxNzcsIDE3NywgMTc3LCAwLjU2Mik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIH1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseUhBQXlIO0FBQzNIO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtFQUNFO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtHQUNDO0lBQ0MsT0FBTztJQUNQLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLDZCQUE2QjtHQUM5QjtHQUNBO0lBQ0MseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7R0FDM0M7OztFQUdEO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCw4Q0FBOEM7SUFDOUMsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQjtJQUNFO01BQ0UsYUFBYTtNQUNiLDZCQUE2QjtNQUM3QixZQUFZO01BQ1osVUFBVTtNQUNWLFNBQVM7TUFDVCxlQUFlO01BQ2YsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxtQkFBbUI7TUFDbkIsa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxXQUFXO01BQ1gsdUJBQXVCO0lBQ3pCO01BQ0U7UUFDRSxVQUFVO01BQ1o7TUFDQTtRQUNFLFVBQVU7UUFDVixTQUFTO1FBQ1QsVUFBVTtRQUNWLG1CQUFtQjtNQUNyQjtJQUNGO01BQ0UsV0FBVztNQUNYLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsV0FBVztJQUNiO0lBQ0E7TUFDRSxlQUFlO01BQ2YsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxZQUFZO01BQ1o7SUFDRjtJQUNBO01BQ0UsV0FBVztJQUNiOztFQUVGO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7RUFDNUM7SUFDRTtNQUNFLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsa0NBQWtDO01BQ2xDLHFDQUFxQztJQUN2QztNQUNFO1FBQ0Usa0JBQWtCO01BQ3BCO0lBQ0Y7TUFDRSxhQUFhO01BQ2IsUUFBUTtNQUNSLGdCQUFnQjtJQUNsQjtNQUNFO1FBQ0Usd0NBQXdDO1FBQ3hDLGtCQUFrQjtNQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIC8qIGJvcmRlcjogc29saWQgYmxhY2s7ICovXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgTW9uZ29saWFuJywgc2Fucy1zZXJpZjtcXG59XFxuaDEsIGgyLCBoMywgaDQsIGg1IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5ib2R5LCBodG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxMCUgMjAlLCByZ2IoMjUzLCAyMzksIDEzMikgMCUsIHJnYigyNDcsIDE5OCwgMTY5KSA1NC4yJSwgcmdiKDIxLCAxODYsIDE5NikgMTAwLjMlKTtcXG59XFxuaDIge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbiAgbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAgbmF2IGJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgLyogYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICB9XFxuICAgbmF2IGJ1dHRvbi5zZWxlY3RlZCB7XFxuICAgIC8qIGJvcmRlcjogc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAxNzcsIDE3NywgMC4zKTtcXG4gICB9XFxuXFxuXFxuICAudG9kYXlXZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC41ZnIgcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gICAgLmxvY2F0aW9uQ2hhbmdlIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgfVxcbiAgICAubG9jYXRpb25DaGFuZ2U6aG92ZXIge1xcbiAgICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB9XFxuICAgIC5sb2NhdGlvbklucHV0IHtcXG4gICAgICBncmlkLXJvdzogMTtcXG4gICAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG4gICAgfVxcbiAgICAgIC5sb2NhdGlvbklucHV0IGlucHV0IHtcXG4gICAgICAgIHdpZHRoOiA4NSU7XFxuICAgICAgfVxcbiAgICAgIC5sb2NhdGlvbklucHV0IGJ1dHRvbiB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwJTtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgfVxcbiAgICAubG9jYXRpb24ge1xcbiAgICAgIGdyaWQtcm93OiAxO1xcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbiAgICB9XFxuICAgIC5jdXJyZW50Q29uZGl0aW9uVGV4dCB7XFxuICAgICAgZ3JpZC1yb3c6IDI7XFxuICAgIH1cXG4gICAgLmN1cnJlbnRUZW1wIHtcXG4gICAgICBncmlkLXJvdzogMiAvIDU7XFxuICAgICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XFxuICAgIH1cXG4gICAgLmN1cnJlbnRDb25kaXRpb25JbWFnZSB7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGdyaWQtcm93OiAzXFxuICAgIH1cXG4gICAgLm90aGVySW5mbyB7XFxuICAgICAgZ3JpZC1yb3c6IDQ7XFxuICAgIH1cXG4gIFxcbiAgLmZ1dHVyZVdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCBibGFjazsgKi9cXG4gICAgLyogYm9yZGVyLXRvcDogMDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE3NywgMTc3LCAwLjMpO1xcbiAgfVxcbiAgICAuZnV0dXJlV2VhdGhlckRheUNvbnRlbnQge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgcGFkZGluZzogMCA1JSAwIDUlO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgfVxcbiAgICAgIC5kYXlDb25kaXRpb24ge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyA1O1xcbiAgICAgIH1cXG4gICAgLmZ1dHVyZVdlYXRoZXJIb3VyQ29udGVudCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDVweDtcXG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICB9XFxuICAgICAgLmhvdXJDb250YWluZXIge1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCByZ2JhKDE3NywgMTc3LCAxNzcsIDAuNTYyKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdldEZvcmVjYXN0LCBnZXREYXlzfSBmcm9tIFwiLi9nZXREYXRhXCI7XG5cbmZ1bmN0aW9uIGVsZW1lbnRCdWlsZGVyKGVsZW1lbnQsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQsIGRhdGFOYW1lKSB7ICAvL2VsZW1lbnQgYnVpbGRlciBjb3BpZWQgYW5kIG1vZGlmaWVkIGZyb20gcHJldmlvdXMgcHJvamVjdC5cbiAgY29uc3QgeGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBpZiAoY2xhc3NMaXN0ICE9ICcnKSB7XG4gICAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT0gJ29iamVjdCcpIHtcbiAgICAgIGNsYXNzTGlzdC5mb3JFYWNoKGNsYXNzTGFiZWwgPT4ge1xuICAgICAgICB4ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTGFiZWwpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHhlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTtcbiAgfVxuICBpZiAodGV4dENvbnRlbnQgIT0gJycpIHtcbiAgICB4ZWxlbWVudC52YWx1ZSA9IHRleHRDb250ZW50O1xuICAgIHhlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKGRhdGFOYW1lICE9ICcnKSB4ZWxlbWVudC5kYXRhc2V0LmVsZW1lbnQgPSBkYXRhTmFtZTtcbiAgcmV0dXJuIHhlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudFdlYXRoZXJVcGRhdGVyKGRheSwgZm9yZWNhc3QpIHtcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKTtcbiAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFRlbXAnKTtcbiAgY29uc3QgY3VycmVudFdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFdpbmQnKTtcbiAgY29uc3QgY3VycmVudEh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRIdW1pZGl0eScpO1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50Q29uZGl0aW9uVGV4dCcpO1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudENvbmRpdGlvbkltYWdlJyk7XG5cbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5sb2NhdGlvbi5uYW1lfSwgJHtmb3JlY2FzdC5sb2NhdGlvbi5yZWdpb259YDtcbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5jdXJyZW50LnRlbXBfY33CsENgO1xuICBjdXJyZW50V2luZC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZm9yZWNhc3QuY3VycmVudC53aW5kX2twaCl9IGttL2hgO1xuICBjdXJyZW50SHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuICBjdXJyZW50Q29uZGl0aW9uVGV4dC50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGN1cnJlbnRDb25kaXRpb25JbWFnZS5zcmMgPSBmb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xufVxuXG5mdW5jdGlvbiBkYXlBdmVyYWdlQ29udGVudEJ1aWxkZXIoZGF5LCBmb3JlY2FzdCkge1xuICBjb25zdCBlbGVtZW50cyA9IFtcbiAgICBlbGVtZW50QnVpbGRlcignaDMnLCAnZGF5Q29uZGl0aW9uJywgZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkuY29uZGl0aW9uLnRleHQsICcnKSxcbiAgICAvLyBlbGVtZW50QnVpbGRlcignaW1nJywgJ2RheUF2ZXJhZ2VJbWcnLCAnJywgJycpLFxuICAgIGVsZW1lbnRCdWlsZGVyKCdoNCcsICdkYXlNYXhUZW1wTGFiZWwnLCAnTWF4JywgJycpLFxuICAgIGVsZW1lbnRCdWlsZGVyKCdoNCcsICdkYXlNYXhUZW1wVmFsdWUnLCBgJHtNYXRoLnJvdW5kKGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5Lm1heHRlbXBfYyl9wrBDYCwgJycpLFxuICAgIGVsZW1lbnRCdWlsZGVyKCdoNCcsICdkYXlIdW1pZGl0eUxhYmVsJywgJ0h1bScsICcnKSxcbiAgICBlbGVtZW50QnVpbGRlcignaDQnLCAnZGF5SHVtaWRpdHlWYWx1ZScsIGAke2ZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5LmF2Z2h1bWlkaXR5fSVgLCAnJyksXG4gICAgZWxlbWVudEJ1aWxkZXIoJ2g0JywgJ2RheU1pblRlbXBMYWJlbCcsIGBNaW5gLCAnJyksXG4gICAgZWxlbWVudEJ1aWxkZXIoJ2g0JywgJ2RheU1pblRlbXBWYWx1ZScsIGAke01hdGgucm91bmQoZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkubWludGVtcF9jKX3CsENgLCAnJyksXG4gICAgZWxlbWVudEJ1aWxkZXIoJ2g0JywgJ2RheVdpbmRMYWJlbCcsIGBXaW5kYCwgJycpLFxuICAgIGVsZW1lbnRCdWlsZGVyKCdoNCcsICdkYXlXaW5kVmFsdWUnLCBgJHtNYXRoLnJvdW5kKGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5Lm1heHdpbmRfa3BoKX1rbS9oYCwgJycpXG4gIF07XG4gIC8vIGVsZW1lbnRzWzFdLnNyYyA9IGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5LmNvbmRpdGlvbi5pY29uOyAvL3RoaXMgZG9lcyBub3QgZmVlbCBsaWtlIGFuIGlkZWFsIHNvbHV0aW9uLlxuICByZXR1cm4gZWxlbWVudHM7XG59XG5mdW5jdGlvbiBob3VybHlDb250ZW50QnVpbGRlcihkYXksIGZvcmVjYXN0KSB7XG4gIGxldCBob3VyQ29udGFpbmVycyA9IFtdO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICBjb25zdCBjdXJyZW50SG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgbGV0IGZyb21Ib3VyID0gMDsgLy9kZXRlcm1pbmVzIHdoaWNoIGhvdXIgdG8gYnVpbGQgdGhlIGhvdXJseXMgZnJvbS5cbiAgaWYgKGRheSA9PSAwKSBmcm9tSG91ciA9IGN1cnJlbnRIb3VyICsgMTtcbiAgZm9yKGZyb21Ib3VyOyBmb3JlY2FzdC5ob3VyLmxlbmd0aCA+IGZyb21Ib3VyOyBmcm9tSG91cisrKSB7XG4gICAgY29uc3QgaG91ckNvbnRhaW5lciA9IGVsZW1lbnRCdWlsZGVyKCdkaXYnLCAnaG91ckNvbnRhaW5lcicsICcnLCAnJyk7XG4gICAgY29uc3QgaG91ckxhYmVsID0gZWxlbWVudEJ1aWxkZXIoJ2gzJywgJycsICcnLCAnJyk7XG4gICAgICAoZnJvbUhvdXIgPCAxMCkgP1xuICAgICAgICBob3VyTGFiZWwudGV4dENvbnRlbnQgPSBgMCR7ZnJvbUhvdXJ9aGA6XG4gICAgICAgIGhvdXJMYWJlbC50ZXh0Q29udGVudCA9IGAke2Zyb21Ib3VyfWhgO1xuICAgIGNvbnN0IGhvdXJUZW1wID0gZWxlbWVudEJ1aWxkZXIoJ2g0JywgJycsIGAke01hdGgucm91bmQoZm9yZWNhc3QuaG91cltmcm9tSG91cl0udGVtcF9jKX3CsENgLCAnJyk7XG4gICAgLy8gY29uc3QgaG91clJhaW5DaGFuY2UgPSBlbGVtZW50QnVpbGRlcignaDUnLCAnJywgYCR7Zm9yZWNhc3QuaG91cltpXS5jaGFuY2Vfb2ZfcmFpbn1gLCAnJyk7XG4gICAgY29uc3QgaG91cldpbmRTcGVlZCA9IGVsZW1lbnRCdWlsZGVyKCdoNScsICcnLCBgJHtNYXRoLnJvdW5kKGZvcmVjYXN0LmhvdXJbZnJvbUhvdXJdLndpbmRfa3BoKX1rbS9oYCwgJycpO1xuICAgIGNvbnN0IGhvdXJJY29uID0gZWxlbWVudEJ1aWxkZXIoJ2ltZycsICdob3VySWNvbicsICcnLCAnJyk7XG4gICAgICBob3VySWNvbi5zcmMgPSBmb3JlY2FzdC5ob3VyW2Zyb21Ib3VyXS5jb25kaXRpb24uaWNvbjtcbiAgICBob3VyQ29udGFpbmVyLmFwcGVuZChob3VyTGFiZWwsIGhvdXJUZW1wLCBob3VyV2luZFNwZWVkLCBob3VySWNvbik7XG4gICAgaG91ckNvbnRhaW5lcnMucHVzaChob3VyQ29udGFpbmVyKTtcbiAgfVxuICByZXR1cm4gaG91ckNvbnRhaW5lcnM7XG59XG5mdW5jdGlvbiB0YWJFdmVudExpc3RlbmVycyhmb3JlY2FzdCkge1xuICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMgYnV0dG9uJyk7XG4gIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgdGFiU3dpdGNoZXIoZS50YXJnZXQuZGF0YXNldC5kYXkgLCBmb3JlY2FzdCk7XG4gICAgfSlcbiAgfSk7XG59XG5mdW5jdGlvbiB0YWJTd2l0Y2hlcihkYXksIGZvcmVjYXN0KSB7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicyBidXR0b24nKTtcbiAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgaWYgKHRhYi5kYXRhc2V0LmRheSA9PSBkYXkpIHRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICB9KTtcblxuICBjdXJyZW50V2VhdGhlclVwZGF0ZXIoMCwgZm9yZWNhc3QpO1xuICBjb25zdCBkYWlseUF2ZXJhZ2VDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZ1dHVyZVdlYXRoZXJEYXlDb250ZW50Jyk7XG4gIGRhaWx5QXZlcmFnZUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGRhaWx5QXZlcmFnZUNvbnRlbnQgPSBkYXlBdmVyYWdlQ29udGVudEJ1aWxkZXIoZGF5LCBmb3JlY2FzdCk7XG4gIGRhaWx5QXZlcmFnZUNvbnRlbnRDb250YWluZXIuYXBwZW5kKC4uLmRhaWx5QXZlcmFnZUNvbnRlbnQpO1xuXG4gIGNvbnN0IGhvdXJseUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnV0dXJlV2VhdGhlckhvdXJDb250ZW50Jyk7XG4gIGhvdXJseUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGhvdXJseUNvbnRlbnQgPSBob3VybHlDb250ZW50QnVpbGRlcihkYXksIGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0pO1xuICBob3VybHlDb250ZW50Q29udGFpbmVyLmFwcGVuZCguLi5ob3VybHlDb250ZW50KTtcbn1cbmZ1bmN0aW9uIHRhYkxhYmVsZXIoKSB7XG4gIGNvbnN0IGRheXMgPSBnZXREYXlzKCk7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicyBidXR0b24nKTtcbiAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLnRleHRDb250ZW50ID0gZGF5c1t0YWIuZGF0YXNldC5kYXldO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGxvY2F0aW9uQ2hhbmdlVG9nZ2xlKCkge1xuICBjb25zdCBsb2NhdGlvbklucHV0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uSW5wdXQnKTtcbiAgbG9jYXRpb25JbnB1dERpdi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2NhdGlvbkNoYW5nZUJ1dHRvbnNJbml0KCkge1xuICBjb25zdCBzZXR0aW5nc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbkNoYW5nZScpO1xuICBzZXR0aW5nc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGxvY2F0aW9uQ2hhbmdlVG9nZ2xlKCkpO1xuICBjb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uSW5wdXQgaW5wdXQnKTtcbiAgY29uc3QgbG9jYXRpb25JbnB1dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbklucHV0IGJ1dHRvbicpO1xuICBsb2NhdGlvbklucHV0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGluaXQobG9jYXRpb25JbnB1dC52YWx1ZSk7XG4gICAgbG9jYXRpb25DaGFuZ2VUb2dnbGUoKTtcbiAgICBsb2NhdGlvbklucHV0LnZhbHVlID0gJyc7XG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0KGxvY2F0aW9uID0gJ25vdHRpbmdoYW0nKSB7XG4gIC8vZGF5czogMD10b2RheSwgMT10b21vcnJvdywgMj1kYXkgYWZ0ZXJcbiAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBnZXRGb3JlY2FzdChsb2NhdGlvbik7XG4gIHRhYkV2ZW50TGlzdGVuZXJzKGZvcmVjYXN0KTsgLy9hdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIHRhYnMuXG4gIHRhYkxhYmVsZXIoKTtcbiAgdGFiU3dpdGNoZXIoMCwgZm9yZWNhc3QpO1xufSIsImltcG9ydCB7IGFkZCB9IGZyb20gXCJkYXRlLWZuc1wiOyAvL25vIGxvbmdlciBuZWVkZWRcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxvY2F0aW9uKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NDg2ZTI1MTk2YTkxNDMyNWE5YzE1NDkzMjIzMTAwOSZkYXlzPTMmcT0ke2xvY2F0aW9ufWApO1xuICBjb25zdCBmb3JlY2FzdFdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBmb3JlY2FzdFdlYXRoZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzKCkgeyAvL2dldHMgdGhlIG5leHQgdGhyZWUgZGF5cyBvZiB0aGUgd2Vla1xuICBjb25zdCBkYXlzID0gW1xuICAgICdTdW5kYXknLFxuICAgICdNb25kYXknLFxuICAgICdUdWVzZGF5JyxcbiAgICAnV2VkbmVzZGF5JyxcbiAgICAnVGh1cnNkYXknLFxuICAgICdGcmlkYXknLFxuICAgICdTYXR1cmRheScsXG4gICAgJ1N1bmRheScsXG4gICAgJ01vbmRheSdcbiAgXVxuICBjb25zdCB0aHJlZURheXMgPSBbJ1RvZGF5J107XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICB0aHJlZURheXMucHVzaChkYXlzW3RvZGF5LmdldERheSgpICsgaV0pO1xuICB9XG4gIHJldHVybiB0aHJlZURheXM7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgZ2V0Rm9yZWNhc3QgfSBmcm9tIFwiLi9nZXREYXRhXCI7XG5pbXBvcnQgeyBpbml0LCBsb2NhdGlvbkNoYW5nZUJ1dHRvbnNJbml0IH0gZnJvbSBcIi4vZG9tQ29udHJvbGxlclwiO1xuaW1wb3J0IFwiLi4vc3R5bGUvc3R5bGUuY3NzXCI7XG5cblxuaW5pdCgpO1xubG9jYXRpb25DaGFuZ2VCdXR0b25zSW5pdCgpO1xuXG5jb25zb2xlLmxvZyhnZXRGb3JlY2FzdCgnbm90dGluZ2hhbScpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==