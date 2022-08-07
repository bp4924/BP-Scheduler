const currentDayEl = $("#currentDay");
let taskTime9 = $("#9");

let today = moment().format("dddd, MMMM Do YYYY");
currentDayEl.text(today);

let taskId = [9, 10, 11, 12, 13, 14, 15, 16, 17];

console.log(today);

function checkTime() {
  var nowHour = 12;
  //  var nowHour = moment().format("hh");
  console.log(nowHour);

  for (var i = 0; i < taskId.length; i++) {
    console.log(taskId[i]);
    num = i + 9;
    var stringI = num.toString();
    var stringId = `#${stringI}`;

    console.log(stringId);
    var taskTime = $("stringId");
    console.log(taskTime); //returns null object. How can I return desired table row element?

    if (num < nowHour) {
      console.log("past");
      $(this).addClass("past");

      //add .past class
    } else if (num > nowHour) {
      console.log("future");
      taskTime.addClass("future");
      // add future class
    } else {
      console.log("now");
      taskTime.addClass("now");
      // add present class
    }
  }
}

checkTime();
