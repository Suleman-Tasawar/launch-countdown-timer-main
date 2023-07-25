//State Variables
let seconds, minutes, hours, days, countDownInterval;

//DOM Elements
let timeDays = document.getElementById("time--days");
let timeHours = document.getElementById("time--hours");
let timeMinutes = document.getElementById("time--minutes");
let timeSeconds = document.getElementById("time--seconds");

function updateSeconds() {
  let seconds = parseInt(timeSeconds.innerHTML);
  seconds--;
  if (seconds < 0) {
    minutes = parseInt(timeMinutes.innerHTML);
    minutes--;
    timeMinutes.innerHTML = minutes;
    if (minutes < 0) {
      hours = parseInt(timeHours.innerHTML);
      hours--;
      timeHours.innerHTML = hours;
      if (hours < 0) {
        days = parseInt(timeDays.innerHTML);
        days--;
        timeDays.innerHTML = days;
        //If totalDays less than 0 the time will stop
        if (days < 0) {
          clearInterval(countDownInterval);
        } else {
          timeDays.innerHTML = 8;
          timeMinutes.innerHTML = 55;
          timeSeconds.innerHTML = 48;
        }
      } else {
        timeMinutes.innerHTML = 55;
        timeSeconds.innerHTML = 48;
      }
    } else {
      timeSeconds.innerHTML = 48;
    }
  } else {
    timeSeconds.innerHTML = seconds;
  }
}

countDownInterval = setInterval(updateSeconds, 1000);
