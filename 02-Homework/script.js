$(document).ready(function () {
  console.log("I am connected");

  // This shows todays date to a hardcode p tag below the Jumbotron
  var todayDate = moment().format("MMMM Do YYYY,");
  var pTodayDate = $("#todayDate").text("Today's Date: " + todayDate);
  pTodayDate.text(todayDate);

  // This updates the current time bellow the date
  var todayTime = $("#currentDay");
  var update = setInterval(function () {
    date = moment(new Date());
    // console.log("Today date is: ", date.format("h:mm:ss a"));
    todayTime.text(date.format("h:mm:ss a"));
  }, 1000);
  setInterval(update, 1000);

  function create9rows() {
    for (var i = 0; i <= 9; i++) {
      var row = $('<div class=row">');
      console.log("this is new div: ", divContainer);
    }
  }
});
