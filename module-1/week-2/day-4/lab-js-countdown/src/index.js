const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let intervalId = null; // Variable to store the interval
const startButtonElement = document.querySelector("#start-btn");
const timeElement = document.getElementById("time");
const toastElement = document.querySelector("#toast");
const closeToastElement = document.querySelector("#close-toast");
const toastMessageElement = document.querySelector("#toast-message");
// ITERATION 1: Add event listener to the start button
startButtonElement.addEventListener("click", () => {
  remainingTime = DURATION;
  timeElement.innerText = remainingTime;
  startCountdown();
  startButtonElement.disabled = true;
});
closeToastElement.addEventListener("click", () => {
  toastElement.classList.remove("show");
});

// ITERATION 2: Start Countdown
function startCountdown() {
  showToast("⏰ Final countdown! ⏰");
  intervalId = setInterval(() => {
    remainingTime--;
    timeElement.innerText = remainingTime;
    console.log("startCountdown called!", remainingTime);
    if (remainingTime === 0) {
      clearInterval(intervalId);
      showToast("Lift off! 🚀");
      startButtonElement.disabled = false;
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastElement.classList.add("show");
  toastMessageElement.innerText = message;
  setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);
}
