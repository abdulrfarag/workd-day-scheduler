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

  //create timeblocks
  var block = document.createElement("div");
  block.classList.add("row", "time-block");
  block.innerHTML = `
<div class="col-sm-12 col-md-1 hour">${element}:00</div>
        <textarea class="${getClass(
          element
        )} col-sm-12 col-md-10 description">${
    localStorage.getItem(element) || ""
  }</textarea>
        <button data-hour=${element} class="btn saveBtn col-sm-12 col-md-1"><i class="fas fa-save"></i></button>
`;
  container.append(block);
}
// check if we past this time
function getClass(hour) {
  hourNum = parseInt(hour);

  if (currentHour < hour) {
    return "future";
  } else if (currentHour == hour) return "present";
  else return "past";
}

