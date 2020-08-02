$(document).ready(function () {
  // global current day and time variables
  var todayDate = moment().format("MMMM Do YYYY,");
  var pTodayDate = $("#todayDate").text("Today's Date: " + todayDate);
  pTodayDate.text(todayDate);
  var todayTime = $("#currentTime");
  var update = setInterval(function () {
    date = moment(new Date());
    // console.log("Today date is: ", date.format("h:mm:ss a"));
    todayTime.text(date.format("h:mm:ss a"));
  }, 1000);
  setInterval(update, 1000);

  // get just the hour from the time to match it later in the updater()
  var today = new Date();
  var currentTime = today.getHours();
  console.log("This is current time: ", currentTime);

  // create saveBtn function and set localstorage
  $(".saveBtn").on("click", function () {
    console.log("This is the btn clicked: ", this);
    // set variable to get values form textarea and times
    var value = $(this).siblings(".reservation").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  });

  // grab from localstore the time and value - grab the row id that we want to place the reservation class - and then were making the value what we stored in the keyvalue of localstorage
  $("#hr-9 .reservation").val(localStorage.getItem("hr-9"));
  $("#hr-10 .reservation").val(localStorage.getItem("hr-10"));
  $("#hr-11 .reservation").val(localStorage.getItem("hr-11"));
  $("#hr-12 .reservation").val(localStorage.getItem("hr-12"));
  $("#hr-13 .reservation").val(localStorage.getItem("hr-13"));
  $("#hr-14 .reservation").val(localStorage.getItem("hr-14"));
  $("#hr-15 .reservation").val(localStorage.getItem("hr-15"));
  $("#hr-16 .reservation").val(localStorage.getItem("hr-16"));
  $("#hr-17 .reservation").val(localStorage.getItem("hr-17"));

  // function for current hour with 3 if statments to change background color of textarea
  function updater() {
    // bring in the currentTime as just the hour
    var currentTime = today.getHours();
    // for loop to go through the currentTime and match it
    $(".timeslot").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);
      if (blockTime < currentTime) {
        console.log("This is blockTime: ", blockTime);
        $(this).addClass("past");
      } else if (blockTime === currentTime) {
        $(this).removeClass("past").addClass("present");
      } else {
        $(this).removeClass("past", "present").addClass("future");
      }
    });
  }
  updater();
});
