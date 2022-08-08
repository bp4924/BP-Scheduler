const currentDayEl = $("#currentDay");

let stringId;
let currentTime;
let today = moment().format("dddd, MMMM Do YYYY");
currentDayEl.text(today);

let taskHour = [9, 10, 11, 12, 13, 14, 15, 16];

function checkTime() {
  var nowHour = moment().format("HH"); // get 24-hour clock #

  for (let i = 0; i < taskHour.length; i++) {
    //generate stringID
    num = i + 9;
    var stringI = num.toString();
    stringId = `#h${stringI}`;

    // find taskTime
    var taskTime = $(stringId);

    // add class based on current time
    if (num < nowHour) {
      //add past class
      taskTime.addClass("past");
    } else if (num > nowHour) {
      // add future class
      taskTime.addClass("future");
    } else {
      // add present class
      taskTime.addClass("now");
    }
  }
}

$("button").click(function () {
  var trId = $(this).closest("tr").attr("id"); // table row ID
  // save content from current row task to local storage*/
  stringId = `task${trId}`;
  var savText = document.getElementById(stringId).value;

  localStorage.setItem(stringId, savText);
});

function restoreItems() {
  for (let i = 0; i < taskHour.length; i++) {
    num = i + 9;
    var stringI = num.toString();
    stringId = `taskh${stringI}`;
    var item = localStorage.getItem(stringId);
    var restoreText = document.getElementById(stringId);
    restoreText.value = item;
  }
}

checkTime();
restoreItems();
