function addToMeetingsHistory(event) {
    event.preventDefault();
    let theme = document.getElementById("meeting_theme").value;
    let date = document.getElementById("meet_date").value;
    let time = document.getElementById("meet_time").value;

    let row = `
        <div class="meeting-row margined">
            <div class="margined">
                <span>${theme}</span>
            </div>
            <div class="margined">
                <span>${date}</span>
            </div>
            <div class="margined">
                <span>${time}</span>
            </div>
        </div>
    `;

    let meetingContainer = document.getElementById("meeting-container");

    meetingContainer.innerHTML += row;

    localStorage.setItem("meeting_history", meetingContainer.innerHTML)
}

window.addEventListener('load', () => {
    (function() {
        let meetingForm = document.getElementById("meeting-form");
        meetingForm.addEventListener("submit", addToMeetingsHistory);
    })();
});

window.addEventListener('load', () => {
    (function() {
        let meetingContainer = document.getElementById("meeting-container");
        let meetingHistory = localStorage.getItem("meeting_history");
        if (meetingHistory != null) {
            meetingContainer.innerHTML = meetingHistory;
        }
    })();
});