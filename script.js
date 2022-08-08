const currentDayEl = $("#currentDay");

let stringId;
let today = moment().format("dddd, MMMM Do YYYY");
currentDayEl.text(today);

let taskHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

console.log(today);

function checkTime() {
  var nowHour = 12; // hard-code nowHour for t/s purposes
  //  var nowHour = moment().format("HH"); // get 24-hour clock #
  console.log(nowHour);

  for (let i = 0; i < taskHour.length; i++) {
    //generate stringID
    num = i + 9;
    var stringI = num.toString();
    stringId = `#${stringI}`;
    console.log(stringId);

    // find taskTime
    var taskTime = $(stringId);

    //add .past class
    if (num < nowHour) {
      console.log("past");
      taskTime.addClass("past");
      // set textarea attribute to disabled -- input?
    } else if (num > nowHour) {
      // add future class
      console.log("future");
      taskTime.addClass("future");
    } else {
      //<input type="text" id="task9"> add present class
      console.log("now");
      taskTime.addClass("now");
    }
  }
}

$("button").click(function () {
  var trId = $(this).closest("tr").attr("id"); // table row ID
  // save content from current row task to local storage*/
  stringId = `task${trId}`;
  console.log("stringID: " + stringId);
  var savText = document.getElementById(stringId).value;
  console.log(savText);

  localStorage.setItem(stringId, savText);
});

function restoreItems() {
  var item = localStorage.getItem("#task12");
  console.log(item);
  $("#task12").text = item.value;
}

checkTime();
//restoreItems();
