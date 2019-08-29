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