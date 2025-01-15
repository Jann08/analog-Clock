const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  
// Chooses element whit outerClockFace
const outerClockFace = document.querySelector(".outer-clock-face");

// Creates div for inner Circle
const innerCircle = document.createElement("div");

// set class for inner Circle
innerCircle.classList.add("inner-circle");

// Add innr Circle to outher Circle
outerClockFace.appendChild(innerCircle);

// Element .clock
const clock = document.querySelector(".clock");

// Array
const numbers = [12, 3, 6, 9,];

// Add Numbers to Clock dynamic
numbers.forEach((number, index) => {
  const numberElement = document.createElement("div");
  numberElement.classList.add("number");
  numberElement.classList.add(`number-${number}`);
  numberElement.innerText = number;
  clock.appendChild(numberElement);
});

// functions that calculates the time shown on the clock
  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();
