
var displayDate = document.getElementById('currentDay');
var currentTime = moment();
var currentHour = moment().hour();
var schedule = [];
var eventInput;

// console.log(currentTime);
// console.log(currentHour);


$(displayDate).text(currentTime._d);

// checks local storage for stored events and moves them to schedule if there are any
// callback for renderEvents
function init() {
    compareTime();
    var storedEvents = JSON.parse(localStorage.getItem("schedule"));
        if(storedEvents) {
            schedule = storedEvents;
        }
        renderEvents();
}


function renderEvents() {
    for (var i = 0; i < schedule.length; i++) {
        var index = schedule[i];
        var time = index.hour;

        // console.log(time);

        $("[data-hour=" + time + "]").val(index.eventTitle);
    }
}
    
function storeEvents() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

// this function compares the schedules hour to the current hour
// it will change the background color accordingly
// grey for past, red for present and green for future
function compareTime() {
    

    $('.col-8').each(function(response) {
        var schedHour = response + 9;
        // console.log(schedHour);

        if (schedHour < currentHour) {
            $(this).addClass("past");
        } else if (schedHour > currentHour) {
            $(this).addClass("future");
        } else if (schedHour = currentHour) {
            $(this).addClass("present");
        }
    });
}

// runs function on click of save button
$('.saveBtn').on("click", function (event) {
    event.preventDefault();

    var $input = $(this).prev();

        var userEvent = {
            eventTitle: $input.val(),
            hour: $input.attr("data-hour")
        };
        // console.log($input.val());

        schedule.push(userEvent);
        storeEvents();
        renderEvents();
});
// callback for init function
init();
