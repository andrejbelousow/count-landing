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
        let numMuch = /\d+/,
            spaceMach = /\s+/,
            nullMuch = /^0/;

        if ( isNaN(+item.value) || spaceMach.test(item.value)) {
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
        } else if(item.value.length == 0) {
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
          
        }  else if(nullMuch.test(item.value)) {
            item.classList.add("inc-focus");
            button.disabled = "true";
            warning.textContent = "Уберите первый нуль";
            item.onfocus = function() {
              item.classList.remove("inc-blur");
              item.classList.add("inc-focus");
            };
            item.onblur = function() {
              item.classList.remove("inc-focus");
              item.classList.add("inc-blur");
            };   
        }  else if(numMuch.test(+item.value)) {
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