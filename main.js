/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


function currentWeatherUpdater(forecast) {
  const currentTemp = document.querySelector('.currentTemp');
  const currentWind = document.querySelector('.currentWind');
  const currentUV = document.querySelector('.currentUV');
  const currentHumidity = document.querySelector('.currentHumidity');
  const currentConditionText = document.querySelector('.currentConditionText');
  const currentConditionImage = document.querySelector('.currentConditionImage');

  currentTemp.textContent = `${forecast.current.temp_c}°C`;
  currentWind.textContent = `${forecast.current.wind_kph} km/h`;
  currentUV.textContent = `${forecast.current.uv}`
  currentHumidity.textContent = `${forecast.current.humidity}%`;
  currentConditionText.textContent = forecast.current.condition.text;
  currentConditionImage.src = forecast.current.condition.icon;
}

async function init() {
  const forecast = await (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getForecast)('nottingham');
  currentWeatherUpdater(forecast);
}

/***/ }),

/***/ "./src/js/getData.js":
/*!***************************!*\
  !*** ./src/js/getData.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getForecast: () => (/* binding */ getForecast)
/* harmony export */ });
async function getForecast(location) {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=486e25196a914325a9c154932231009&days=3&q=${location}`);
  const forecastWeather = await response.json();
  return forecastWeather;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/js/getData.js");
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domController */ "./src/js/domController.js");



(0,_domController__WEBPACK_IMPORTED_MODULE_1__.init)();

console.log((0,_getData__WEBPACK_IMPORTED_MODULE_0__.getForecast)('nottingham'))


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOztBQUVqQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0Isd0JBQXdCO0FBQ3ZELCtCQUErQiwyQkFBMkI7QUFDMUQsNkJBQTZCLG9CQUFvQjtBQUNqRCxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTs7QUFFTztBQUNQLHlCQUF5QixxREFBVztBQUNwQztBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JCTztBQUNQLDBIQUEwSCxTQUFTO0FBQ25JO0FBQ0E7QUFDQTs7Ozs7O1VDSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDRDs7QUFFdkMsb0RBQUk7O0FBRUosWUFBWSxxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEZvcmVjYXN0IH0gZnJvbSBcIi4vZ2V0RGF0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudFdlYXRoZXJVcGRhdGVyKGZvcmVjYXN0KSB7XG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRUZW1wJyk7XG4gIGNvbnN0IGN1cnJlbnRXaW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRXaW5kJyk7XG4gIGNvbnN0IGN1cnJlbnRVViA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50VVYnKTtcbiAgY29uc3QgY3VycmVudEh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRIdW1pZGl0eScpO1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50Q29uZGl0aW9uVGV4dCcpO1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudENvbmRpdGlvbkltYWdlJyk7XG5cbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5jdXJyZW50LnRlbXBfY33CsENgO1xuICBjdXJyZW50V2luZC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmN1cnJlbnQud2luZF9rcGh9IGttL2hgO1xuICBjdXJyZW50VVYudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5jdXJyZW50LnV2fWBcbiAgY3VycmVudEh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuY3VycmVudC5odW1pZGl0eX0lYDtcbiAgY3VycmVudENvbmRpdGlvblRleHQudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBjdXJyZW50Q29uZGl0aW9uSW1hZ2Uuc3JjID0gZm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgZ2V0Rm9yZWNhc3QoJ25vdHRpbmdoYW0nKTtcbiAgY3VycmVudFdlYXRoZXJVcGRhdGVyKGZvcmVjYXN0KTtcbn0iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QobG9jYXRpb24pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT00ODZlMjUxOTZhOTE0MzI1YTljMTU0OTMyMjMxMDA5JmRheXM9MyZxPSR7bG9jYXRpb259YCk7XG4gIGNvbnN0IGZvcmVjYXN0V2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGZvcmVjYXN0V2VhdGhlcjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldEZvcmVjYXN0IH0gZnJvbSBcIi4vZ2V0RGF0YVwiO1xuaW1wb3J0IHsgaW5pdCB9IGZyb20gXCIuL2RvbUNvbnRyb2xsZXJcIjtcblxuaW5pdCgpO1xuXG5jb25zb2xlLmxvZyhnZXRGb3JlY2FzdCgnbm90dGluZ2hhbScpKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=