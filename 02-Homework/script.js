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

  var timeArray = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  timeArray.forEach((time, index) => {
    console.log(time);
    console.log("index: ", index);
    var divRow = $("<div>");
    divRow.addClass("row mt-1 mb-1");

    // create time columns with time showing
    var colTime = $("<div>");
    colTime.addClass("col-sm-2 border border-warning rounded pt-4");
    colTime.text(time);
    divRow.append(colTime);
    // create the textarea columns
    var colText = $("<textarea>");
    colText.addClass(
      "col-sm-9 border border-secondary rounded pt-4 textArea text-muted"
    );
    divRow.append(colText);
    // create the save btn columns with index attr
    var colSave = $("<div>");
    colSave.addClass("col-sm-1 btn btn-outline-info rounded pt-3");
    colSave.attr("index", [index]);
    colSave.attr("type", "button");
    colSave.text("Save");
    divRow.append(colSave);

    // Add the rows with the columns to the div container
    $(".container").append(divRow);
  });

  // Click function for saveBtn
  $(".btn").on("click", function () {
    // grab index from save button
    var index = $(this).attr("index");
    console.log("This is the btn your clicking index: ", index);

    // call getText to grab the text that is put in the textarea that matches the savebtn
    getText(index);
  });

  // grab the text info from our textarea
  function getText(index) {
    var storageArray = [];
    //grab both variables time and textArea
    var time = document.getElementsByClassName(
      "col-sm-2 border border-warning rounded pt-4"
    );
    var textArea = document.getElementsByClassName(
      "col-sm-9 border border-secondary rounded pt-4 textArea text-muted"
    );
    //pass index into time[index].innerText returns the time slot
    var indexTime = time[index].innerText;

    //pass index into textArea[index].value returns text value
    var indexOfTextArea = textArea[index].value;

    // make object to save to local storage
    localStorage.setItem("timeslot", indexTime);
    localStorage.setItem("text", indexOfTextArea);
    var textObj = {
      timeslot: indexTime,
      textarea: indexOfTextArea,
    };

    storageArray = JSON.parse(localStorage.getItem("textObj")) || [];
    storageArray.push(textObj);
    localStorage.setItem("textObj", JSON.stringify(storageArray));

    // saveLocalStorage(storageArray);
  }

  function saveLocalStorage(storageArray) {
    console.log("textObj", textObj);
  }
});
