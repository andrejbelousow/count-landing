// Переменные
let inputs = document.querySelectorAll("input"),
  inputsArray = Array.from(inputs),
  randomInputs = inputsArray.slice(0, 2),
  timerInputs = inputsArray.slice(2, 5),
  buttons = document.querySelectorAll("button"),
  warning = document.querySelectorAll(".warning"),
  randomWarning = warning[0],
  timerWarning = warning[1];

// Появление текста в хедере
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

fadeIn();

// Плавный переход по якорям
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

Anchore();

// Сброс инпутов и проверка на числовые значения
function checkInputs() {

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

checkInputs();

// Работа рандомайзера  
function Random() {
  buttons[0].addEventListener("click", function() {
    let f = parseInt(randomInputs[0].value),
        g = parseInt(randomInputs[1].value),
        randomResult = document.querySelector(".random-result");
        a = Math.floor(Math.random() * (g - f) + f);
    randomResult.textContent = a;
    randomResult.style.display = "block";
  });
} 

Random();

// Работа таймера
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

Timer();