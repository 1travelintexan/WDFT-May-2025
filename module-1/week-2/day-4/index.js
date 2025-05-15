console.log(petName);
// global variable
var petName = "Ragnar";
// console.log(add(2, 3));
// console.log(add(200, 300));
for (let i = 0; i < 10; i++) {
  const test = "pizza pizza";
  //   console.log(test);
}
// console.log(total);

//funcitonally scoped
function add(a, b) {
  const petName = "Luna";
  const total = a + b;
  return total;
}

//arrow function example
const subtract = (a, b) => {
  return a - b;
};
// console.log("subtract", subtract(10, 5));

//***********copies ************/
let dog = "Ragnar";
let dog2 = dog;
dog2 = "Buddy";

const arr1 = [1, 2, 3, [4, 5]];
//spread operator
const arr2 = [...arr1];
//true deep copy
const arr3 = JSON.parse(JSON.stringify(arr1));
//new way to make a deep copy
const arr4 = structuredClone(arr1);
arr3[3].push(6);
arr4[3].push("hello world");
// console.log({ arr1, arr2, arr3, arr4 });

//***************asyncronous code ***************/
//***********Top of the page */
const timerElement = document.querySelector("#timer");
const startBtnElement = document.getElementById("start-btn");
const resetBtnElement = document.getElementById("reset-btn");
const divContainerElement = document.querySelector("#container");
const divTextElement = document.querySelector("#container h5");
// const stopBtnElement = document.getElementById("stop-btn");
// setTimeout syntax
// setTimeout(() => {
//   //   console.log("after three seconds");
// }, 3000);
// // console.log("globally ");
let count = 0;
let intervalId;
let timerRunning = false;
//event listeners
startBtnElement.addEventListener("click", () => {
  if (!timerRunning) {
    startTimer();
  } else if (timerRunning) {
    stopTimer();
  }
});

// stopBtnElement.addEventListener("click", () => {
//   clearInterval(intervalId);
// });

//reset button event listener
resetBtnElement.addEventListener("click", resetTimer);

//all of my functions
function startTimer() {
  timerRunning = true;
  resetBtnElement.disabled = true;
  //change the text of the button to say stop instead of start
  startBtnElement.innerText = "Stop";
  startBtnElement.style.backgroundColor = "red";
  //setInterval syntax
  intervalId = setInterval(() => {
    count++;
    timerElement.innerText = count;
    console.log(count);
    if (count >= 10) {
      clearInterval(intervalId);
      showDivContainer("You did it! Nice work! :)");
    } else if (count === 5) {
      showDivContainer("Half way");
    } else if (count === 8) {
      showDivContainer("You are almost there!");
    }
  }, 1000);
}
function stopTimer() {
  //change the text of the button to say start instead of stop
  startBtnElement.innerText = "Start";
  startBtnElement.style.backgroundColor = "green";
  timerRunning = false;
  clearInterval(intervalId);
  //making the reset button disabled so we can only press it when the timer is stopped
  resetBtnElement.disabled = false;
}
function resetTimer() {
  count = 0;
  timerElement.innerText = count;
}
function showDivContainer(text) {
  divContainerElement.style.display = "block";
  divTextElement.innerText = text;
  setTimeout(() => {
    divContainerElement.style.display = "none";
  }, 1000);
}
