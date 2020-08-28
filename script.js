
var schedule = [];
var eventInput;

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

        $("[data-hour=" + time + "]").val(index.eventTitle);
    }
}
    
function storeEvents() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

$('.saveBtn').on("click", function (event) {
    event.preventDefault();
    var $input = $(this).prev();

        var userEvent = {
            eventTitle: $input.val(),
            hour: $input.attr("data-hour")
        };
        console.log($input.val());

        schedule.push(userEvent);
        storeEvents();
        renderEvents();
})
init();
