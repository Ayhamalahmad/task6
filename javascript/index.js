// Get Elements
let secondsDiv = document.querySelector(".seconds");
let minutesDiv = document.querySelector(".minutes");
let hoursDiv = document.querySelector(".hours");
let daysDiv = document.querySelector(".days");
let buttons = document.querySelectorAll(".buttons button");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
// initialize Varaibles
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;
let interval;
function timer() {
  seconds++;
  secondsDiv.textContent = seconds < 10 ? `0${seconds} ` : seconds;
  if (seconds == 59) {
    seconds = 0;
    minutes++;
    minutesDiv.textContent = minutes < 10 ? `0${minutes} ` : minutes;
  }
  if (minutes == 59) {
    minutes = 0;
    hours++;
    hoursDiv.textContent = hours < 10 ? `0${hours} ` : hours;
  }
  if (hours == 59) {
    hours = 0;
    days++;
    daysDiv.textContent = days < 10 ? `0${days} ` : days;
  }
}

// handle Clicked Button To Trigger Needed Function
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target === startBtn) {
      startTimer();
    }
    if (e.target === stopBtn) {
      stopF();
    }
    if (e.target === resetBtn) {
      resetF();
    }
  });
});
// Start Function
function startTimer() {
  interval = setInterval(timer, 1);
}
// Reset Function
function resetF() {
  stopF();
  seconds = 0;
  minutes = 0;
  hours = 0;
  days = 0;
  daysDiv.textContent="00";
  hoursDiv.textContent="00";
  minutesDiv.textContent="00";
  secondsDiv.textContent="00";
}
// Stop Function
function stopF() {
  clearInterval(interval);
}
