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
  min-width: 100vw;;
  background: radial-gradient(circle at 10% 20%, rgb(253, 239, 132) 0%, rgb(247, 198, 169) 54.2%, rgb(21, 186, 196) 100.3%);
}
h2 {
  font-size: 5rem;
}

main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  min-height: 100vh;
}
/* .mainContainer {
  min-height: 100%;
  display: flex;
  flex-direction: column;
} */
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
    position: relative;
    padding: 5%;
    grid-template-rows: 0.5fr 0.5fr repeat(2, 1fr);
    grid-template-columns: 1fr 2fr 0.5fr;
    align-items: center;
  }
    .locationChange {
      display: flex;
      background-color: transparent;
      border: none;
      padding: 0;
      margin: 0;
      width: fit-content;
      height: fit-content;
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
`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,8CAA8C;AAChD;AACA;EACE,SAAS;AACX;AACA;EACE,aAAa;AACf;AACA;EACE,SAAS;EACT,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,yHAAyH;AAC3H;AACA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;;;;GAIG;EACD;IACE,aAAa;IACb,uBAAuB;EACzB;GACC;IACC,OAAO;IACP,YAAY;IACZ,gCAAgC;IAChC,0BAA0B;IAC1B,6BAA6B;GAC9B;GACA;IACC,yBAAyB;IACzB,mBAAmB;IACnB,0CAA0C;;GAE3C;;;EAGD;IACE,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,8CAA8C;IAC9C,oCAAoC;IACpC,mBAAmB;EACrB;IACE;MACE,aAAa;MACb,6BAA6B;MAC7B,YAAY;MACZ,UAAU;MACV,SAAS;MACT,kBAAkB;MAClB,mBAAmB;IACrB;IACA;MACE,WAAW;MACX,uBAAuB;IACzB;MACE;QACE,UAAU;MACZ;MACA;QACE,UAAU;QACV,SAAS;QACT,UAAU;QACV,mBAAmB;MACrB;IACF;MACE,WAAW;MACX,uBAAuB;IACzB;IACA;MACE,WAAW;IACb;IACA;MACE,eAAe;MACf,uBAAuB;IACzB;IACA;MACE,YAAY;MACZ;IACF;IACA;MACE,WAAW;IACb;;EAEF;IACE,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,yBAAyB;IACzB,mBAAmB;IACnB,0CAA0C;EAC5C;IACE;MACE,aAAa;MACb,kBAAkB;MAClB,kCAAkC;MAClC,qCAAqC;IACvC;MACE;QACE,kBAAkB;MACpB;IACF;MACE,aAAa;MACb,QAAQ;MACR,gBAAgB;IAClB;MACE;QACE,wCAAwC;QACxC,kBAAkB;MACpB","sourcesContent":["* {\n  /* border: solid black; */\n  box-sizing: border-box;\n  font-family: 'Noto Sans Mongolian', sans-serif;\n}\nh1, h2, h3, h4, h5 {\n  margin: 0;\n}\n.hidden {\n  display: none;\n}\nbody, html {\n  margin: 0;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 100vw;;\n  background: radial-gradient(circle at 10% 20%, rgb(253, 239, 132) 0%, rgb(247, 198, 169) 54.2%, rgb(21, 186, 196) 100.3%);\n}\nh2 {\n  font-size: 5rem;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  max-width: 500px;\n  min-height: 100vh;\n}\n/* .mainContainer {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n} */\n  nav {\n    display: flex;\n    justify-content: center;\n  }\n   nav button {\n    flex: 1;\n    border: none;\n    /* border-bottom: solid black; */\n    border-radius: 5px 5px 0 0;\n    background-color: transparent;\n   }\n   nav button.selected {\n    /* border: solid black; */\n    border-bottom: none;\n    background-color: rgba(177, 177, 177, 0.3);\n\n   }\n\n\n  .todayWeather {\n    display: grid;\n    position: relative;\n    padding: 5%;\n    grid-template-rows: 0.5fr 0.5fr repeat(2, 1fr);\n    grid-template-columns: 1fr 2fr 0.5fr;\n    align-items: center;\n  }\n    .locationChange {\n      display: flex;\n      background-color: transparent;\n      border: none;\n      padding: 0;\n      margin: 0;\n      width: fit-content;\n      height: fit-content;\n    }\n    .locationInput {\n      grid-row: 1;\n      grid-column: 1 / span 2;\n    }\n      .locationInput input {\n        width: 85%;\n      }\n      .locationInput button {\n        padding: 0;\n        margin: 0;\n        width: 10%;\n        height: fit-content;\n      }\n    .location {\n      grid-row: 1;\n      grid-column: 1 / span 2;\n    }\n    .currentConditionText {\n      grid-row: 2;\n    }\n    .currentTemp {\n      grid-row: 2 / 5;\n      grid-column: 2 / span 2;\n    }\n    .currentConditionImage {\n      height: 100%;\n      grid-row: 3\n    }\n    .otherInfo {\n      grid-row: 4;\n    }\n  \n  .futureWeather {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    /* border: solid black; */\n    /* border-top: 0; */\n    background-color: rgba(177, 177, 177, 0.3);\n  }\n    .futureWeatherDayContent {\n      display: grid;\n      padding: 0 5% 0 5%;\n      grid-template-rows: repeat(3, 1fr);\n      grid-template-columns: repeat(4, 1fr);\n    }\n      .dayCondition {\n        grid-column: 1 / 5;\n      }\n    .futureWeatherHourContent {\n      display: flex;\n      gap: 5px;\n      overflow: scroll;\n    }\n      .hourContainer {\n        border: solid rgba(177, 177, 177, 0.562);\n        border-radius: 5px;\n      }\n"],"sourceRoot":""}]);
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
/* harmony export */   init: () => (/* binding */ init)
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

async function init() {
  //days: 0=today, 1=tomorrow, 2=day after
  const forecast = await (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getForecast)('nottingham');
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

console.log((0,_getData__WEBPACK_IMPORTED_MODULE_0__.getForecast)('nottingham'))
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDbkk7QUFDQTtBQUNBOztBQUVPLHFCQUFxQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUMxQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXdDO0FBQ0Q7QUFDWDs7QUFFNUIsb0RBQUk7O0FBRUosWUFBWSxxREFBVyxlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMvZG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9nZXREYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgLyogYm9yZGVyOiBzb2xpZCBibGFjazsgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgTW9uZ29saWFuJywgc2Fucy1zZXJpZjtcbn1cbmgxLCBoMiwgaDMsIGg0LCBoNSB7XG4gIG1hcmdpbjogMDtcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYm9keSwgaHRtbCB7XG4gIG1hcmdpbjogMDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAxMDB2dzs7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAlIDIwJSwgcmdiKDI1MywgMjM5LCAxMzIpIDAlLCByZ2IoMjQ3LCAxOTgsIDE2OSkgNTQuMiUsIHJnYigyMSwgMTg2LCAxOTYpIDEwMC4zJSk7XG59XG5oMiB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLyogLm1haW5Db250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSAqL1xuICBuYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgIG5hdiBidXR0b24ge1xuICAgIGZsZXg6IDE7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIC8qIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgfVxuICAgbmF2IGJ1dHRvbi5zZWxlY3RlZCB7XG4gICAgLyogYm9yZGVyOiBzb2xpZCBibGFjazsgKi9cbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAxNzcsIDE3NywgMC4zKTtcblxuICAgfVxuXG5cbiAgLnRvZGF5V2VhdGhlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogNSU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjVmciByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMC41ZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAgIC5sb2NhdGlvbkNoYW5nZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB9XG4gICAgLmxvY2F0aW9uSW5wdXQge1xuICAgICAgZ3JpZC1yb3c6IDE7XG4gICAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcbiAgICB9XG4gICAgICAubG9jYXRpb25JbnB1dCBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICB9XG4gICAgICAubG9jYXRpb25JbnB1dCBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICB9XG4gICAgLmxvY2F0aW9uIHtcbiAgICAgIGdyaWQtcm93OiAxO1xuICAgICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XG4gICAgfVxuICAgIC5jdXJyZW50Q29uZGl0aW9uVGV4dCB7XG4gICAgICBncmlkLXJvdzogMjtcbiAgICB9XG4gICAgLmN1cnJlbnRUZW1wIHtcbiAgICAgIGdyaWQtcm93OiAyIC8gNTtcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAyO1xuICAgIH1cbiAgICAuY3VycmVudENvbmRpdGlvbkltYWdlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGdyaWQtcm93OiAzXG4gICAgfVxuICAgIC5vdGhlckluZm8ge1xuICAgICAgZ3JpZC1yb3c6IDQ7XG4gICAgfVxuICBcbiAgLmZ1dHVyZVdlYXRoZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrOyAqL1xuICAgIC8qIGJvcmRlci10b3A6IDA7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE3NywgMTc3LCAwLjMpO1xuICB9XG4gICAgLmZ1dHVyZVdlYXRoZXJEYXlDb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBwYWRkaW5nOiAwIDUlIDAgNSU7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICB9XG4gICAgICAuZGF5Q29uZGl0aW9uIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyA1O1xuICAgICAgfVxuICAgIC5mdXR1cmVXZWF0aGVySG91ckNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogNXB4O1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB9XG4gICAgICAuaG91ckNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlcjogc29saWQgcmdiYSgxNzcsIDE3NywgMTc3LCAwLjU2Mik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIH1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseUhBQXlIO0FBQzNIO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7Ozs7R0FJRztFQUNEO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtHQUNDO0lBQ0MsT0FBTztJQUNQLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLDZCQUE2QjtHQUM5QjtHQUNBO0lBQ0MseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7O0dBRTNDOzs7RUFHRDtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDhDQUE4QztJQUM5QyxvQ0FBb0M7SUFDcEMsbUJBQW1CO0VBQ3JCO0lBQ0U7TUFDRSxhQUFhO01BQ2IsNkJBQTZCO01BQzdCLFlBQVk7TUFDWixVQUFVO01BQ1YsU0FBUztNQUNULGtCQUFrQjtNQUNsQixtQkFBbUI7SUFDckI7SUFDQTtNQUNFLFdBQVc7TUFDWCx1QkFBdUI7SUFDekI7TUFDRTtRQUNFLFVBQVU7TUFDWjtNQUNBO1FBQ0UsVUFBVTtRQUNWLFNBQVM7UUFDVCxVQUFVO1FBQ1YsbUJBQW1CO01BQ3JCO0lBQ0Y7TUFDRSxXQUFXO01BQ1gsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLGVBQWU7TUFDZix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLFlBQVk7TUFDWjtJQUNGO0lBQ0E7TUFDRSxXQUFXO0lBQ2I7O0VBRUY7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDBDQUEwQztFQUM1QztJQUNFO01BQ0UsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixrQ0FBa0M7TUFDbEMscUNBQXFDO0lBQ3ZDO01BQ0U7UUFDRSxrQkFBa0I7TUFDcEI7SUFDRjtNQUNFLGFBQWE7TUFDYixRQUFRO01BQ1IsZ0JBQWdCO0lBQ2xCO01BQ0U7UUFDRSx3Q0FBd0M7UUFDeEMsa0JBQWtCO01BQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgLyogYm9yZGVyOiBzb2xpZCBibGFjazsgKi9cXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ05vdG8gU2FucyBNb25nb2xpYW4nLCBzYW5zLXNlcmlmO1xcbn1cXG5oMSwgaDIsIGgzLCBoNCwgaDUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbmJvZHksIGh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMTAwdnc7O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxMCUgMjAlLCByZ2IoMjUzLCAyMzksIDEzMikgMCUsIHJnYigyNDcsIDE5OCwgMTY5KSA1NC4yJSwgcmdiKDIxLCAxODYsIDE5NikgMTAwLjMlKTtcXG59XFxuaDIge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4vKiAubWFpbkNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufSAqL1xcbiAgbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAgbmF2IGJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgLyogYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICB9XFxuICAgbmF2IGJ1dHRvbi5zZWxlY3RlZCB7XFxuICAgIC8qIGJvcmRlcjogc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAxNzcsIDE3NywgMC4zKTtcXG5cXG4gICB9XFxuXFxuXFxuICAudG9kYXlXZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjVmciByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDAuNWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgICAubG9jYXRpb25DaGFuZ2Uge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB9XFxuICAgIC5sb2NhdGlvbklucHV0IHtcXG4gICAgICBncmlkLXJvdzogMTtcXG4gICAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG4gICAgfVxcbiAgICAgIC5sb2NhdGlvbklucHV0IGlucHV0IHtcXG4gICAgICAgIHdpZHRoOiA4NSU7XFxuICAgICAgfVxcbiAgICAgIC5sb2NhdGlvbklucHV0IGJ1dHRvbiB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwJTtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgfVxcbiAgICAubG9jYXRpb24ge1xcbiAgICAgIGdyaWQtcm93OiAxO1xcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbiAgICB9XFxuICAgIC5jdXJyZW50Q29uZGl0aW9uVGV4dCB7XFxuICAgICAgZ3JpZC1yb3c6IDI7XFxuICAgIH1cXG4gICAgLmN1cnJlbnRUZW1wIHtcXG4gICAgICBncmlkLXJvdzogMiAvIDU7XFxuICAgICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XFxuICAgIH1cXG4gICAgLmN1cnJlbnRDb25kaXRpb25JbWFnZSB7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGdyaWQtcm93OiAzXFxuICAgIH1cXG4gICAgLm90aGVySW5mbyB7XFxuICAgICAgZ3JpZC1yb3c6IDQ7XFxuICAgIH1cXG4gIFxcbiAgLmZ1dHVyZVdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCBibGFjazsgKi9cXG4gICAgLyogYm9yZGVyLXRvcDogMDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE3NywgMTc3LCAwLjMpO1xcbiAgfVxcbiAgICAuZnV0dXJlV2VhdGhlckRheUNvbnRlbnQge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgcGFkZGluZzogMCA1JSAwIDUlO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgfVxcbiAgICAgIC5kYXlDb25kaXRpb24ge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyA1O1xcbiAgICAgIH1cXG4gICAgLmZ1dHVyZVdlYXRoZXJIb3VyQ29udGVudCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDVweDtcXG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICB9XFxuICAgICAgLmhvdXJDb250YWluZXIge1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCByZ2JhKDE3NywgMTc3LCAxNzcsIDAuNTYyKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdldEZvcmVjYXN0LCBnZXREYXlzfSBmcm9tIFwiLi9nZXREYXRhXCI7XG5cbmZ1bmN0aW9uIGVsZW1lbnRCdWlsZGVyKGVsZW1lbnQsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQsIGRhdGFOYW1lKSB7ICAvL2VsZW1lbnQgYnVpbGRlciBjb3BpZWQgYW5kIG1vZGlmaWVkIGZyb20gcHJldmlvdXMgcHJvamVjdC5cbiAgY29uc3QgeGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBpZiAoY2xhc3NMaXN0ICE9ICcnKSB7XG4gICAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT0gJ29iamVjdCcpIHtcbiAgICAgIGNsYXNzTGlzdC5mb3JFYWNoKGNsYXNzTGFiZWwgPT4ge1xuICAgICAgICB4ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTGFiZWwpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHhlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTtcbiAgfVxuICBpZiAodGV4dENvbnRlbnQgIT0gJycpIHtcbiAgICB4ZWxlbWVudC52YWx1ZSA9IHRleHRDb250ZW50O1xuICAgIHhlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKGRhdGFOYW1lICE9ICcnKSB4ZWxlbWVudC5kYXRhc2V0LmVsZW1lbnQgPSBkYXRhTmFtZTtcbiAgcmV0dXJuIHhlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudFdlYXRoZXJVcGRhdGVyKGRheSwgZm9yZWNhc3QpIHtcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKTtcbiAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFRlbXAnKTtcbiAgY29uc3QgY3VycmVudFdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFdpbmQnKTtcbiAgY29uc3QgY3VycmVudEh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRIdW1pZGl0eScpO1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50Q29uZGl0aW9uVGV4dCcpO1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudENvbmRpdGlvbkltYWdlJyk7XG5cbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5sb2NhdGlvbi5uYW1lfSwgJHtmb3JlY2FzdC5sb2NhdGlvbi5yZWdpb259YDtcbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5jdXJyZW50LnRlbXBfY33CsENgO1xuICBjdXJyZW50V2luZC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZm9yZWNhc3QuY3VycmVudC53aW5kX2twaCl9IGttL2hgO1xuICBjdXJyZW50SHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuICBjdXJyZW50Q29uZGl0aW9uVGV4dC50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGN1cnJlbnRDb25kaXRpb25JbWFnZS5zcmMgPSBmb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xufVxuXG5mdW5jdGlvbiBkYXlBdmVyYWdlQ29udGVudEJ1aWxkZXIoZGF5LCBmb3JlY2FzdCkge1xuICBjb25zdCBlbGVtZW50cyA9IFtcbiAgICBlbGVtZW50QnVpbGRlcignaDMnLCAnZGF5Q29uZGl0aW9uJywgZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkuY29uZGl0aW9uLnRleHQsICcnKSxcbiAgICAvLyBlbGVtZW50QnVpbGRlcignaW1nJywgJ2RheUF2ZXJhZ2VJbWcnLCAnJywgJycpLFxuICAgIGVsZW1lbnRCdWlsZGVyKCdoNCcsICdkYXlNYXhUZW1wTGFiZWwnLCAnTWF4JywgJycpLFxuICAgIGVsZW1lbnRCdWlsZGVyKCdoNCcsICdkYXlNYXhUZW1wVmFsdWUnLCBgJHtNYXRoLnJvdW5kKGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5Lm1heHRlbXBfYyl9wrBDYCwgJycpLFxuICAgIGVsZW1lbnRCdWlsZGVyKCdoNCcsICdkYXlIdW1pZGl0eUxhYmVsJywgJ0h1bScsICcnKSxcbiAgICBlbGVtZW50QnVpbGRlcignaDQnLCAnZGF5SHVtaWRpdHlWYWx1ZScsIGAke2ZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5LmF2Z2h1bWlkaXR5fSVgLCAnJyksXG4gICAgZWxlbWVudEJ1aWxkZXIoJ2g0JywgJ2RheU1pblRlbXBMYWJlbCcsIGBNaW5gLCAnJyksXG4gICAgZWxlbWVudEJ1aWxkZXIoJ2g0JywgJ2RheU1pblRlbXBWYWx1ZScsIGAke01hdGgucm91bmQoZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkubWludGVtcF9jKX3CsENgLCAnJyksXG4gICAgZWxlbWVudEJ1aWxkZXIoJ2g0JywgJ2RheVdpbmRMYWJlbCcsIGBXaW5kYCwgJycpLFxuICAgIGVsZW1lbnRCdWlsZGVyKCdoNCcsICdkYXlXaW5kVmFsdWUnLCBgJHtNYXRoLnJvdW5kKGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5Lm1heHdpbmRfa3BoKX1rbS9oYCwgJycpXG4gIF07XG4gIC8vIGVsZW1lbnRzWzFdLnNyYyA9IGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5LmNvbmRpdGlvbi5pY29uOyAvL3RoaXMgZG9lcyBub3QgZmVlbCBsaWtlIGFuIGlkZWFsIHNvbHV0aW9uLlxuICByZXR1cm4gZWxlbWVudHM7XG59XG5mdW5jdGlvbiBob3VybHlDb250ZW50QnVpbGRlcihkYXksIGZvcmVjYXN0KSB7XG4gIGxldCBob3VyQ29udGFpbmVycyA9IFtdO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICBjb25zdCBjdXJyZW50SG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgbGV0IGZyb21Ib3VyID0gMDsgLy9kZXRlcm1pbmVzIHdoaWNoIGhvdXIgdG8gYnVpbGQgdGhlIGhvdXJseXMgZnJvbS5cbiAgaWYgKGRheSA9PSAwKSBmcm9tSG91ciA9IGN1cnJlbnRIb3VyICsgMTtcbiAgZm9yKGZyb21Ib3VyOyBmb3JlY2FzdC5ob3VyLmxlbmd0aCA+IGZyb21Ib3VyOyBmcm9tSG91cisrKSB7XG4gICAgY29uc3QgaG91ckNvbnRhaW5lciA9IGVsZW1lbnRCdWlsZGVyKCdkaXYnLCAnaG91ckNvbnRhaW5lcicsICcnLCAnJyk7XG4gICAgY29uc3QgaG91ckxhYmVsID0gZWxlbWVudEJ1aWxkZXIoJ2gzJywgJycsICcnLCAnJyk7XG4gICAgICAoZnJvbUhvdXIgPCAxMCkgP1xuICAgICAgICBob3VyTGFiZWwudGV4dENvbnRlbnQgPSBgMCR7ZnJvbUhvdXJ9aGA6XG4gICAgICAgIGhvdXJMYWJlbC50ZXh0Q29udGVudCA9IGAke2Zyb21Ib3VyfWhgO1xuICAgIGNvbnN0IGhvdXJUZW1wID0gZWxlbWVudEJ1aWxkZXIoJ2g0JywgJycsIGAke01hdGgucm91bmQoZm9yZWNhc3QuaG91cltmcm9tSG91cl0udGVtcF9jKX3CsENgLCAnJyk7XG4gICAgLy8gY29uc3QgaG91clJhaW5DaGFuY2UgPSBlbGVtZW50QnVpbGRlcignaDUnLCAnJywgYCR7Zm9yZWNhc3QuaG91cltpXS5jaGFuY2Vfb2ZfcmFpbn1gLCAnJyk7XG4gICAgY29uc3QgaG91cldpbmRTcGVlZCA9IGVsZW1lbnRCdWlsZGVyKCdoNScsICcnLCBgJHtNYXRoLnJvdW5kKGZvcmVjYXN0LmhvdXJbZnJvbUhvdXJdLndpbmRfa3BoKX1rbS9oYCwgJycpO1xuICAgIGNvbnN0IGhvdXJJY29uID0gZWxlbWVudEJ1aWxkZXIoJ2ltZycsICdob3VySWNvbicsICcnLCAnJyk7XG4gICAgICBob3VySWNvbi5zcmMgPSBmb3JlY2FzdC5ob3VyW2Zyb21Ib3VyXS5jb25kaXRpb24uaWNvbjtcbiAgICBob3VyQ29udGFpbmVyLmFwcGVuZChob3VyTGFiZWwsIGhvdXJUZW1wLCBob3VyV2luZFNwZWVkLCBob3VySWNvbik7XG4gICAgaG91ckNvbnRhaW5lcnMucHVzaChob3VyQ29udGFpbmVyKTtcbiAgfVxuICByZXR1cm4gaG91ckNvbnRhaW5lcnM7XG59XG5mdW5jdGlvbiB0YWJFdmVudExpc3RlbmVycyhmb3JlY2FzdCkge1xuICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMgYnV0dG9uJyk7XG4gIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgdGFiU3dpdGNoZXIoZS50YXJnZXQuZGF0YXNldC5kYXkgLCBmb3JlY2FzdCk7XG4gICAgfSlcbiAgfSk7XG59XG5mdW5jdGlvbiB0YWJTd2l0Y2hlcihkYXksIGZvcmVjYXN0KSB7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicyBidXR0b24nKTtcbiAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgaWYgKHRhYi5kYXRhc2V0LmRheSA9PSBkYXkpIHRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICB9KTtcblxuICBjdXJyZW50V2VhdGhlclVwZGF0ZXIoMCwgZm9yZWNhc3QpO1xuICBjb25zdCBkYWlseUF2ZXJhZ2VDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZ1dHVyZVdlYXRoZXJEYXlDb250ZW50Jyk7XG4gIGRhaWx5QXZlcmFnZUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGRhaWx5QXZlcmFnZUNvbnRlbnQgPSBkYXlBdmVyYWdlQ29udGVudEJ1aWxkZXIoZGF5LCBmb3JlY2FzdCk7XG4gIGRhaWx5QXZlcmFnZUNvbnRlbnRDb250YWluZXIuYXBwZW5kKC4uLmRhaWx5QXZlcmFnZUNvbnRlbnQpO1xuXG4gIGNvbnN0IGhvdXJseUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnV0dXJlV2VhdGhlckhvdXJDb250ZW50Jyk7XG4gIGhvdXJseUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGhvdXJseUNvbnRlbnQgPSBob3VybHlDb250ZW50QnVpbGRlcihkYXksIGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0pO1xuICBob3VybHlDb250ZW50Q29udGFpbmVyLmFwcGVuZCguLi5ob3VybHlDb250ZW50KTtcbn1cbmZ1bmN0aW9uIHRhYkxhYmVsZXIoKSB7XG4gIGNvbnN0IGRheXMgPSBnZXREYXlzKCk7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicyBidXR0b24nKTtcbiAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLnRleHRDb250ZW50ID0gZGF5c1t0YWIuZGF0YXNldC5kYXldO1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gIC8vZGF5czogMD10b2RheSwgMT10b21vcnJvdywgMj1kYXkgYWZ0ZXJcbiAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBnZXRGb3JlY2FzdCgnbm90dGluZ2hhbScpO1xuICB0YWJFdmVudExpc3RlbmVycyhmb3JlY2FzdCk7IC8vYXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byB0YWJzLlxuICB0YWJMYWJlbGVyKCk7XG4gIHRhYlN3aXRjaGVyKDAsIGZvcmVjYXN0KTtcbn0iLCJpbXBvcnQgeyBhZGQgfSBmcm9tIFwiZGF0ZS1mbnNcIjsgLy9ubyBsb25nZXIgbmVlZGVkXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChsb2NhdGlvbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTQ4NmUyNTE5NmE5MTQzMjVhOWMxNTQ5MzIyMzEwMDkmZGF5cz0zJnE9JHtsb2NhdGlvbn1gKTtcbiAgY29uc3QgZm9yZWNhc3RXZWF0aGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZm9yZWNhc3RXZWF0aGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5cygpIHsgLy9nZXRzIHRoZSBuZXh0IHRocmVlIGRheXMgb2YgdGhlIHdlZWtcbiAgY29uc3QgZGF5cyA9IFtcbiAgICAnU3VuZGF5JyxcbiAgICAnTW9uZGF5JyxcbiAgICAnVHVlc2RheScsXG4gICAgJ1dlZG5lc2RheScsXG4gICAgJ1RodXJzZGF5JyxcbiAgICAnRnJpZGF5JyxcbiAgICAnU2F0dXJkYXknLFxuICAgICdTdW5kYXknLFxuICAgICdNb25kYXknXG4gIF1cbiAgY29uc3QgdGhyZWVEYXlzID0gWydUb2RheSddO1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMzsgaSsrKSB7XG4gICAgdGhyZWVEYXlzLnB1c2goZGF5c1t0b2RheS5nZXREYXkoKSArIGldKTtcbiAgfVxuICByZXR1cm4gdGhyZWVEYXlzO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdldEZvcmVjYXN0IH0gZnJvbSBcIi4vZ2V0RGF0YVwiO1xuaW1wb3J0IHsgaW5pdCB9IGZyb20gXCIuL2RvbUNvbnRyb2xsZXJcIjtcbmltcG9ydCBcIi4uL3N0eWxlL3N0eWxlLmNzc1wiO1xuXG5pbml0KCk7XG5cbmNvbnNvbGUubG9nKGdldEZvcmVjYXN0KCdub3R0aW5naGFtJykpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9