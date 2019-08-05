// Появление текста в хедере
let text = document.querySelectorAll(".additional-info__text"),
    button = document.querySelector(".additional-info-buttom");

setTimeout(function(){
    text[0].style.opacity = 1;
}, 1000, setTimeout(function() {
    text[1].style.opacity = 1;
    button.style.opacity = 1;
}, 2000));

// Плавный переход по якорям
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

// Сброс инпутов и проверка на числовые значения

let inputs = document.querySelectorAll("input"),
    inputsArray = Array.from(inputs),
    randomInputs = inputsArray.slice(0, 2),
    timerInputs = inputsArray.slice(3, 6),
    buttons = document.querySelectorAll("button");

    randomInputs.forEach(function(item) {
      item.value = '';
      item.onfocus = function() {
        item.classList.add("focus");
      };
      item.onblur = function() {
        item.classList.remove("focus");
      };
      item.addEventListener("input", function() {
        console.log(typeof(item.value));
        a = parseInt(item.value, 10);
        console.log(typeof(a));
        if ( isNaN(a) && item.value != '') {
            buttons[0].disabled = "true";
            item.classList.add("inc-focus");
            item.onfocus = function() {
              item.classList.add("focus");
            };
            item.onblur = function() {
              item.classList.add("inc-focus");
            };
        } else if(item.value == '') {
            item.classList.toggle("inc-focus");
            item.onfocus = function() {
              item.classList.add("focus");
            };
            item.onblur = function() {
              item.classList.remove("focus");
            };
        } else {
          item.classList.add("focus");
            item.onfocus = function() {
              item.classList.add("focus");
            };
            item.onblur = function() {
              item.classList.remove("focus");
            };
            buttons[0].disabled = "false";
        }
      }); 
    });

    buttons[0].addEventListener("click", function() {
        console.log("кнопка работает");
    });