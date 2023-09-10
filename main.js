// update time
function updateUTCTime() {
  const currentUTCTime = new Date().getTime();
  document.querySelector('[data-testid="currentUTCTime"]').textContent =
    currentUTCTime + " milliseconds";
}

// update current week
function updateDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayIndex = new Date().getDay(); // 0 for Sunday, 1 for Monday, etc.
  const currentDayOfWeek = daysOfWeek[currentDayIndex];
  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    currentDayOfWeek;
}

// Call the functions initially to display data
updateUTCTime();
updateDayOfWeek();

// Update the time every second (1000 milliseconds)
setInterval(updateUTCTime, 1000);
