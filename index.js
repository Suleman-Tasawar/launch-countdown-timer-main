// Countdown timer settings
const initialDays = 8;
const initialHours = 23;
const initialMinutes = 55;
const initialSeconds = 48;

// DOM elements
const timeDaysElement = document.getElementById("time--days");
const timeHoursElement = document.getElementById("time--hours");
const timeMinutesElement = document.getElementById("time--minutes");
const timeSecondsElement = document.getElementById("time--seconds");

// Countdown state variables
let days = initialDays;
let hours = initialHours;
let minutes = initialMinutes;
let seconds = initialSeconds;
let timerShouldBeRunning = true;

function updateCountdown() {
  seconds--;

  if (seconds < 0) {
    minutes--;
    seconds = 59;
    if (minutes < 0) {
      hours--;
      minutes = 59;
      if (hours < 0) {
        days--;
        hours = 23;
        if (days < 0) {
          timerShouldBeRunning = false;
          clearInterval(countDownInterval);
        }
      }
    }
  }

  // Update the DOM elements with the latest countdown values
  timeDaysElement.innerHTML = days;
  timeHoursElement.innerHTML = hours < 10 ? "0" + hours : hours;
  timeMinutesElement.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  timeSecondsElement.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}

// Call the updateCountdown function every second
const countDownInterval = setInterval(updateCountdown, 1000);
