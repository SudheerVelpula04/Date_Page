document.getElementById('submitBtn').addEventListener('click', function() {
    const dateInput = document.getElementById('dateInput').value;
    const selectedDate = new Date(dateInput);
    
    if (!dateInput) {
        alert("Please select a date.");
        return;
    }

    // Display selected date
    document.getElementById('dateInfo').innerText = `Selected Date: ${selectedDate.toDateString()}`;

    // Get day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[selectedDate.getDay()];
    document.getElementById('dayOfWeek').innerText = `Day of the Week: ${dayOfWeek}`;

    // Calculate days until next weekend
    const nextSaturday = new Date(selectedDate);
    nextSaturday.setDate(selectedDate.getDate() + (6 - selectedDate.getDay()));
    const daysUntilWeekend = Math.max(0, (nextSaturday - selectedDate) / (1000 * 60 * 60 * 24));
    document.getElementById('daysUntilWeekend').innerText = `Days until next weekend: ${daysUntilWeekend}`;

    // Check if the year is a leap year
    const year = selectedDate.getFullYear();
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    document.getElementById('leapYearInfo').innerText = `Is ${year} a leap year? ${isLeapYear ? 'Yes' : 'No'}`;
});