//script.js
function reminderSet() {
  var minuteValue = document.getElementById("minValue").value;
  const startingMins = minuteValue;
  let time = startingMins * 60;

  const countdownEl = document.getElementById("countdown");

  if (time != 0) setInterval(updateCountdown, 1000);
  else {
    var audio = new Audio("Reminder.mp3");
    audio.play();
  }

  function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    if (time != 0) time--;
  }
}

const startele = document.getElementById("reminderbtn");
startele.addEventListener("click", () => {
  const minVal = document.getElementById("minValue").value;
  chrome.runtime.sendMessage({ time: minVal }, function (response) {
    console.log(response);
  });
  reminderSet();
});

const stopele = document.getElementById("stopbtn");
stopele.addEventListener("click", () => {
  chrome.alarms.clearAll();
  window.close();
});
