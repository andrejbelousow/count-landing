/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Anchors.js":
/*!************************!*\
  !*** ./src/Anchors.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Anchore() {
    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 300,
    framesCount = 80;
  
    anchors.forEach(function(item) {
      item.addEventListener('click', function(e) {
  
        e.preventDefault();
        
        let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
        
        let scroller = setInterval(function() {
  
          let scrollBy = coordY / framesCount;
          
          if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
  
            window.scrollBy(0, scrollBy);
          } else {
  
            window.scrollTo(0, coordY);
            clearInterval(scroller);
          }
  
        }, animationTime / framesCount);
      });
    });
  }

module.exports = Anchore;

/***/ }),

/***/ "./src/checkInputs.js":
/*!****************************!*\
  !*** ./src/checkInputs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function checkInputs() {
  let inputs = document.querySelectorAll("input"),
  inputsArray = Array.from(inputs),
  randomInputs = inputsArray.slice(0, 2),
  timerInputs = inputsArray.slice(2, 5),
  buttons = document.querySelectorAll("button"),
  warning = document.querySelectorAll(".warning"),
  randomWarning = warning[0],
  timerWarning = warning[1];  
  
  function Checking(inputs, button, warning) {
    inputs.forEach(function(item) {
      item.value = '';
      if(item.value == '') {
        button.disabled = "true";
      } 
      item.onfocus = function() {
        item.classList.add("focus");
      };
      item.onblur = function() {
        item.classList.remove("focus");
      };
      item.addEventListener("input", function() {
        let a = parseInt(item.value, 10);
        if ( isNaN(a) && item.value != '') {
          button.disabled = "true";
            item.classList.add("inc-focus");
            warning.textContent = "Введите числовое значение";
            item.onfocus = function() {
              item.classList.remove("inc-blur");
              item.classList.add("inc-focus");
            };
            item.onblur = function() {
              item.classList.remove("inc-focus");
              item.classList.add("inc-blur");
            };
        } else if(item.value == '') {
            item.classList.add("inc-focus");
            button.disabled = "true";
            warning.textContent = "Не оставляйте поле пустым";
            item.onfocus = function() {
              item.classList.remove("inc-blur");
              item.classList.add("inc-focus");
            };
            item.onblur = function() {
              item.classList.remove("inc-focus");
              item.classList.add("inc-blur");
            };
        } else {
          item.classList.remove("inc-focus");
          item.classList.add("focus");
            item.onfocus = function() {
              item.classList.add("focus");
            };
            item.onblur = function() {
              item.classList.remove("focus");
            };
            button.disabled = "";
            warning.textContent = "";
        }
      }); 
    });
  }

  Checking(randomInputs, buttons[0], randomWarning);
  Checking(timerInputs, buttons[1], timerWarning);
}

module.exports = checkInputs;

/***/ }),

/***/ "./src/count.js":
/*!**********************!*\
  !*** ./src/count.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function Random() {
  let = buttons = document.querySelectorAll("button"),
        inputs = document.querySelectorAll("input"),
        inputsArray = Array.from(inputs),
        randomInputs = inputsArray.slice(0, 2);
    buttons[0].addEventListener("click", function() {
      let f = parseInt(randomInputs[0].value),
          g = parseInt(randomInputs[1].value),
          randomResult = document.querySelector(".random-result");
          a = Math.floor(Math.random() * (g - f) + f);
      randomResult.textContent = a;
      randomResult.style.display = "block";
    });
}
module.exports = Random;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Переменные(модули)

let count = __webpack_require__(/*! ./count.js */ "./src/count.js"),
    checkInputs = __webpack_require__(/*! ./checkInputs.js */ "./src/checkInputs.js"),
    Anchore = __webpack_require__(/*! ./Anchors.js */ "./src/Anchors.js"),
    textShow = __webpack_require__(/*! ./textShow.js */ "./src/textShow.js"),
    timer = __webpack_require__(/*! ./timer.js */ "./src/timer.js");
// Появление текста в хедере
textShow();

// Плавный переход по якорям
Anchore();

// Сброс инпутов и проверка на числовые значения
checkInputs();

// Работа рандомайзера  
count();

// Работа таймера
timer();

/***/ }),

/***/ "./src/textShow.js":
/*!*************************!*\
  !*** ./src/textShow.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function fadeIn() {
    let text = document.querySelectorAll(".additional-info__text"),
        button = document.querySelector(".additional-info-buttom");
    setTimeout(function(){
      text[0].style.opacity = 1;
      }, 1000, setTimeout(function() {
        text[1].style.opacity = 1;
        button.style.opacity = 1;
        }, 2000));
}

module.exports = fadeIn;

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function Timer() {
    buttons[1].addEventListener("click", function() {
      let timeSet = new Date(),
          inputsTimer = document.querySelectorAll(".timer-setting input");
          inputsTimer.forEach(function (item) {
            if (item.value == '') {
              item.value = 00;
            }
          });
      let a = parseInt(inputsTimer[0].value, 10),
          b = parseInt(inputsTimer[1].value, 10),
          c = parseInt(inputsTimer[2].value, 10);

      timeSet.setHours(timeSet.getHours() + a);
      timeSet.setMinutes(timeSet.getMinutes() + b);
      timeSet.setSeconds(timeSet.getSeconds() + c);

      function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
          hours = Math.floor((t / (1000 * 60 * 60)) % 24),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);

        return {
          'total': t,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }

      function setClock(endtime) {
        let spanTimer = document.querySelectorAll(".timer-result span"),
          hours = spanTimer[0],
          minutes = spanTimer[1],
          seconds = spanTimer[2],
          timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
          let t = getTimeRemaining(endtime);
          hours.textContent = t.hours;
          minutes.textContent = t.minutes;
          seconds.textContent = t.seconds;

          if (t.hours < 10) {
            hours.textContent = "0" + t.hours;
          }

          if (t.minutes < 10) {
            minutes.textContent = "0" + t.minutes;
          }

          if (t.seconds < 10) {
            seconds.textContent = "0" + t.seconds;
          } 

          if (t.minutes == 0 && t.seconds < 30) {
            spanTimer.forEach(function(item) {
                item.classList.add("gone");
            });
          }

          if (t.total < 0) {
            clearInterval(timeInterval);
            spanTimer.forEach(function (item) {
              item.textContent = 0;
              item.classList.remove("gone");
            });

          }
        }
      }
      setClock(timeSet);
    });  
}

module.exports = Timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map