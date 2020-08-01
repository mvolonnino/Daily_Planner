$(document).ready(function () {
  // This shows todays date to a hardcode p tag below the Jumbotron
  var todayDate = moment().format("MMMM Do YYYY,");
  var pTodayDate = $("#todayDate").text("Today's Date: " + todayDate);
  pTodayDate.text(todayDate);
  var textArray = [];

  // This updates the current time bellow the date
  var todayTime = $("#currentTime");
  var update = setInterval(function () {
    date = moment(new Date());
    // console.log("Today date is: ", date.format("h:mm:ss a"));
    todayTime.text(date.format("h:mm:ss a"));
  }, 1000);
  setInterval(update, 1000);

  // create the 9 rows for the table
  for (var hour = 9; hour < 18; hour++) {
    var divRow = $("<div>");
    divRow.addClass("row mt-1 mb-2");
    divRow.attr("value", [hour]);

    // add the Time column
    var colTime = $("<div>");
    colTime.addClass("col-sm-2 border border-warning rounded pt-4");
    colTime.attr("value", [hour]);
    // to get correct 'am' or 'pm' on the time and not have it in military time
    if (hour === 12) {
      colTime.text([hour] + ":00 PM");
    } else if (hour > 12) {
      colTime.text([hour] - 12 + ":00 PM");
    } else {
      colTime.text([hour] + ":00 AM");
    }
    divRow.append(colTime);
    // add the Text column
    var colText = $("<textarea>");
    colText.addClass("col-sm-9 border border-secondary rounded pt-4");
    colText.attr("id", "textArea");
    colText.attr("value", [hour]);
    divRow.append(colText);
    // add the Save column
    var colSave = $("<div>");
    colSave.addClass("col-sm-1 btn btn-outline-info rounded pt-3");
    colSave.attr("value", [hour]);
    colSave.attr("type", "button");
    colSave.text("Save");
    divRow.append(colSave);

    // add the rows and columns to the container div
    $(".container").append(divRow);
  }

  // Click function for saveBtn
  $(".btn").on("click", function () {
    var btnClick = $(this).attr("value");
    var textArea = $("#textArea").text();

    console.log("This value was clicked: ", btnClick);

    getText();
    console.log(getText());
  });

  // grab the text info from our textarea
  function getText() {
    var textInfo = $("#textArea").val();
    console.log("This is the text we input: ", textInfo);
    textArray.push(textInfo);
    console.log("This is our text info in an array: ", textArray);
  }
});
