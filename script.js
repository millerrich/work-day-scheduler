
var displayDate = document.getElementById('currentDay');
var currentTime = moment();
var currentHour = moment().hour();
var schedule = [];
var eventInput;



$(displayDate).text(currentTime._d);


function init() {
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

// function compareTime() {
//     $.each($('.col-8'), function() {

//         if ('data-hour' < currentHour) {
//             $(this).addClass("past");
//         } else if ('data-hour' = currentHour) {
//             $(this).addClass("present");
//         } else if ('data-hour' > currentHour) {
//             $(this).addClass("future");
//         }
//     });
// }

$('.saveBtn').on("click", function (event) {
    event.preventDefault();

    // compareTime();

    var $input = $(this).prev();

        var userEvent = {
            eventTitle: $input.val(),
            hour: $input.attr("data-hour")
        };
        console.log($input.val());

        schedule.push(userEvent);
        storeEvents();
        renderEvents();
});
init();
console.log(currentTime);
console.log(currentHour);
