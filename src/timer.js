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