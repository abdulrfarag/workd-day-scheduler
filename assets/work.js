const currentDay = document.querySelector("#currentDay");
const container = document.querySelector(".container");

currentDay.textContent = new Date().toLocaleString();
// set interval to update every sec
runClock();
function runClock() {
  setInterval(() => {
    currentDay.textContent = new Date().toLocaleString();
  }, 1000);
}
// loop over time
