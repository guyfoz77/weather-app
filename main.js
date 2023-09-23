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

function tabContentBuilder(forecast) {
  let hourContainers = [];
  for(let i = 0; forecast.hour.length > i; i++) {
    const hourContainer = elementBuilder('div', 'hourContainer', '', '');
    const hourLabel = elementBuilder('h3', '', '', '');
      (i < 10) ?
        hourLabel.textContent = `0${i}h`:
        hourLabel.textContent = `${i}h`;
    const hourTemp = elementBuilder('h4', '', `${forecast.hour[i].temp_c}°C`, '');
    const hourRainChance = elementBuilder('h5', '', `${forecast.hour[i].chance_of_rain}`, '');
    const hourWindSpeed = elementBuilder('h5', '', `${forecast.hour[i].wind_kph}km/h`, '');
    const hourIcon = elementBuilder('img', 'hourIcon', '', '');
      hourIcon.src = forecast.hour[i].condition.icon;
    hourContainer.append(hourLabel, hourTemp, hourRainChance, hourWindSpeed, hourIcon);
    hourContainers.push(hourContainer);
  }
  return hourContainers;
}
function tabSwitcher(tabNumber, forecast) {
  const tabContentContainer = document.querySelector('.futureWeatherContent');
  const tabContent = tabContentBuilder(forecast.forecast.forecastday[tabNumber]);
  tabContentContainer.append(...tabContent);
}

async function init() {
  const forecast = await (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getForecast)('nottingham');
  currentWeatherUpdater(forecast);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOztBQUV4QyxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0Isd0JBQXdCO0FBQ3ZELCtCQUErQiwyQkFBMkI7QUFDMUQsNkJBQTZCLG9CQUFvQjtBQUNqRCxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsRUFBRTtBQUN0QyxtQ0FBbUMsRUFBRTtBQUNyQyxpREFBaUQsd0JBQXdCO0FBQ3pFLHVEQUF1RCxnQ0FBZ0M7QUFDdkYsc0RBQXNELDBCQUEwQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCx5QkFBeUIscURBQVc7QUFDcEM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9ETztBQUNQLDBIQUEwSCxTQUFTO0FBQ25JO0FBQ0E7QUFDQTs7Ozs7O1VDSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDRDs7QUFFdkMsb0RBQUk7O0FBRUosWUFBWSxxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEZvcmVjYXN0IH0gZnJvbSBcIi4vZ2V0RGF0YVwiO1xuXG5mdW5jdGlvbiBlbGVtZW50QnVpbGRlcihlbGVtZW50LCBjbGFzc0xpc3QsIHRleHRDb250ZW50LCBkYXRhTmFtZSkgeyAgLy9lbGVtZW50IGJ1aWxkZXIgY29waWVkIGFuZCBtb2RpZmllZCBmcm9tIHByZXZpb3VzIHByb2plY3QuXG4gIGNvbnN0IHhlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgaWYgKGNsYXNzTGlzdCAhPSAnJykge1xuICAgIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09ICdvYmplY3QnKSB7XG4gICAgICBjbGFzc0xpc3QuZm9yRWFjaChjbGFzc0xhYmVsID0+IHtcbiAgICAgICAgeGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc0xhYmVsKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB4ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdCk7XG4gIH1cbiAgaWYgKHRleHRDb250ZW50ICE9ICcnKSB7XG4gICAgeGVsZW1lbnQudmFsdWUgPSB0ZXh0Q29udGVudDtcbiAgICB4ZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICB9XG4gIGlmIChkYXRhTmFtZSAhPSAnJykgeGVsZW1lbnQuZGF0YXNldC5lbGVtZW50ID0gZGF0YU5hbWU7XG4gIHJldHVybiB4ZWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnRXZWF0aGVyVXBkYXRlcihmb3JlY2FzdCkge1xuICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50VGVtcCcpO1xuICBjb25zdCBjdXJyZW50V2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50V2luZCcpO1xuICBjb25zdCBjdXJyZW50VVYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFVWJyk7XG4gIGNvbnN0IGN1cnJlbnRIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50SHVtaWRpdHknKTtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudENvbmRpdGlvblRleHQnKTtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRDb25kaXRpb25JbWFnZScpO1xuXG4gIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuY3VycmVudC50ZW1wX2N9wrBDYDtcbiAgY3VycmVudFdpbmQudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5jdXJyZW50LndpbmRfa3BofSBrbS9oYDtcbiAgY3VycmVudFVWLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuY3VycmVudC51dn1gXG4gIGN1cnJlbnRIdW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmN1cnJlbnQuaHVtaWRpdHl9JWA7XG4gIGN1cnJlbnRDb25kaXRpb25UZXh0LnRleHRDb250ZW50ID0gZm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgY3VycmVudENvbmRpdGlvbkltYWdlLnNyYyA9IGZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLmljb247XG59XG5cbmZ1bmN0aW9uIHRhYkNvbnRlbnRCdWlsZGVyKGZvcmVjYXN0KSB7XG4gIGxldCBob3VyQ29udGFpbmVycyA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBmb3JlY2FzdC5ob3VyLmxlbmd0aCA+IGk7IGkrKykge1xuICAgIGNvbnN0IGhvdXJDb250YWluZXIgPSBlbGVtZW50QnVpbGRlcignZGl2JywgJ2hvdXJDb250YWluZXInLCAnJywgJycpO1xuICAgIGNvbnN0IGhvdXJMYWJlbCA9IGVsZW1lbnRCdWlsZGVyKCdoMycsICcnLCAnJywgJycpO1xuICAgICAgKGkgPCAxMCkgP1xuICAgICAgICBob3VyTGFiZWwudGV4dENvbnRlbnQgPSBgMCR7aX1oYDpcbiAgICAgICAgaG91ckxhYmVsLnRleHRDb250ZW50ID0gYCR7aX1oYDtcbiAgICBjb25zdCBob3VyVGVtcCA9IGVsZW1lbnRCdWlsZGVyKCdoNCcsICcnLCBgJHtmb3JlY2FzdC5ob3VyW2ldLnRlbXBfY33CsENgLCAnJyk7XG4gICAgY29uc3QgaG91clJhaW5DaGFuY2UgPSBlbGVtZW50QnVpbGRlcignaDUnLCAnJywgYCR7Zm9yZWNhc3QuaG91cltpXS5jaGFuY2Vfb2ZfcmFpbn1gLCAnJyk7XG4gICAgY29uc3QgaG91cldpbmRTcGVlZCA9IGVsZW1lbnRCdWlsZGVyKCdoNScsICcnLCBgJHtmb3JlY2FzdC5ob3VyW2ldLndpbmRfa3BofWttL2hgLCAnJyk7XG4gICAgY29uc3QgaG91ckljb24gPSBlbGVtZW50QnVpbGRlcignaW1nJywgJ2hvdXJJY29uJywgJycsICcnKTtcbiAgICAgIGhvdXJJY29uLnNyYyA9IGZvcmVjYXN0LmhvdXJbaV0uY29uZGl0aW9uLmljb247XG4gICAgaG91ckNvbnRhaW5lci5hcHBlbmQoaG91ckxhYmVsLCBob3VyVGVtcCwgaG91clJhaW5DaGFuY2UsIGhvdXJXaW5kU3BlZWQsIGhvdXJJY29uKTtcbiAgICBob3VyQ29udGFpbmVycy5wdXNoKGhvdXJDb250YWluZXIpO1xuICB9XG4gIHJldHVybiBob3VyQ29udGFpbmVycztcbn1cbmZ1bmN0aW9uIHRhYlN3aXRjaGVyKHRhYk51bWJlciwgZm9yZWNhc3QpIHtcbiAgY29uc3QgdGFiQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdXR1cmVXZWF0aGVyQ29udGVudCcpO1xuICBjb25zdCB0YWJDb250ZW50ID0gdGFiQ29udGVudEJ1aWxkZXIoZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbdGFiTnVtYmVyXSk7XG4gIHRhYkNvbnRlbnRDb250YWluZXIuYXBwZW5kKC4uLnRhYkNvbnRlbnQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBnZXRGb3JlY2FzdCgnbm90dGluZ2hhbScpO1xuICBjdXJyZW50V2VhdGhlclVwZGF0ZXIoZm9yZWNhc3QpO1xuICB0YWJTd2l0Y2hlcigwLCBmb3JlY2FzdCk7XG59IiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxvY2F0aW9uKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NDg2ZTI1MTk2YTkxNDMyNWE5YzE1NDkzMjIzMTAwOSZkYXlzPTMmcT0ke2xvY2F0aW9ufWApO1xuICBjb25zdCBmb3JlY2FzdFdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBmb3JlY2FzdFdlYXRoZXI7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRGb3JlY2FzdCB9IGZyb20gXCIuL2dldERhdGFcIjtcbmltcG9ydCB7IGluaXQgfSBmcm9tIFwiLi9kb21Db250cm9sbGVyXCI7XG5cbmluaXQoKTtcblxuY29uc29sZS5sb2coZ2V0Rm9yZWNhc3QoJ25vdHRpbmdoYW0nKSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9