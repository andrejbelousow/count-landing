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