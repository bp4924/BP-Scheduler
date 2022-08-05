const currentDayEl = $("#currentDay");

let today = moment().format("dddd, MMMM Do YYYY");
currentDayEl.text(today);

console.log(today);
