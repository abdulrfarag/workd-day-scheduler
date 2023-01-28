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
const hoursToDisplay = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
// currentHour = 11;

currentHour = new Date().getHours();
for (let index = 0; index < hoursToDisplay.length; index++) {
  const element = hoursToDisplay[index];

