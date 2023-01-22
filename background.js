//background.js
chrome.alarms.onAlarm.addListener(() => {
  chrome.notifications.create(
    {
      type: "basic",
      iconUrl: "alert.jpeg",
      title: "Take a Break",
      message: "Have a sip of water or fix your posture gentleman!",
    },
    () => {}
  );
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  if (request.time) {
    createAlarm(request.time);
    console.log(request.time);
  }

  sendResponse(() => {
    return false;
  });
});

function createAlarm(timeInt) {
  chrome.alarms.create("take_break", {
    delayInMinutes: Number(timeInt),
    periodInMinutes: Number(timeInt),
  });
}
