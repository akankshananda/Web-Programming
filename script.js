function planTrip() {

    let destination = document.getElementById("destination").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;

    if (destination == "" || startDate == "" || endDate == "") {
        alert("Please fill in all trip details.");
        return;
    }

    let start = new Date(startDate);
    let end = new Date(endDate);

    if (end < start) {
        alert("End date must be after start date.");
        return;
    }

    let difference = end.getTime() - start.getTime();
    let days = Math.round(difference / (1000 * 60 * 60 * 24)) + 1;

    if (days > 7) {
        alert("Please select a trip between 1 and 7 days.");
        return;
    }

    localStorage.setItem("destination", destination);
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("endDate", endDate);
    localStorage.setItem("days", days);

    if (destination == "Manali") {
        window.location.href = "manali.html";
    } else if (destination == "Paris") {
        window.location.href = "paris.html";
    } else if (destination == "Kyoto") {
        window.location.href = "kyoto.html";
    }
}

window.onload = function() {

    let days = localStorage.getItem("days");

    if (days && document.getElementById("showDays")) {
        document.getElementById("showDays").textContent = days + " Days";
    }

    if (days) {

        let daySections = document.getElementsByClassName("day-section");

        for (let i = 0; i < daySections.length; i++) {

            if (i >= Number(days)) {
                daySections[i].style.display = "none";
            }
        }
    }
};