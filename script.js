$(document).ready(function () {

//declare variables
var currentDate = moment().format('MMMM Do YYYY, h:mma');
var currentHour = moment().hour();

// display current day/time
$("#currentDay").text(currentDate);


//create timeblocks from 9am to 5pm
for (var i = 8; i < 18; i++) {

    var newTimeBlock = $("<div>").addClass("row");
    $(".container").append(newTimeBlock);

    var time = $("<div>").addClass("col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12 hour");

    //am or pm
    if (i > 12) {
        time.text((i - 12) + "pm");
    } else if (i === 12) { 
        time.text("12pm");
    } else {
        time.text(i + "am");
    }

    //input items
    var textArea = $("<textarea>").addClass("col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 time-block description").attr("id", i);

    //color coding
    if (i === currentHour) {
        textArea.addClass("present").removeClass("past future");
    } else if (i > currentHour) {
        textArea.addClass("future").removeClass("past present");
    } else {
        textArea.addClass("past").removeClass("present future");
    }

    //create save button
    var saveButton = $("<button>").addClass("col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12 saveBtn");
    var icon = $("<i>");
    
    icon.addClass("far fa-save fa-2x").attr("id", i);
    $(saveButton).append(icon);

    $(newTimeBlock).append(time, textArea, saveButton);

};


    //event handler on save button that stores user input to local storage
    $(".saveBtn").on("click", function () {        
        var toDo = $(this).siblings("textarea")
        var task = toDo.val();
        var toDoTime = toDo.attr("id");
        localStorage.setItem(toDoTime, task);       

    });


});