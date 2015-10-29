"use strict";

chrome.sessions.getDevices({}, function(sessions){

  for (var i in sessions) {
    var device = sessions[i];
    var deviceDiv = document.createElement("div");
    deviceDiv.classList.add("device");

    var deviceName = document.createElement("div");
    deviceName.textContent = device.deviceName;
    deviceName.classList.add("device-name");
    deviceDiv.appendChild(deviceName);

    var sessionsDiv = document.createElement("div");
    sessionsDiv.classList.add("sessions");

    for (var j in device.sessions) {
    var session = device.sessions[j];

      var sessionDiv = document.createElement("div");
      sessionDiv.classList.add("session");

      for (var k in session.window.tabs) {
        var tab = session.window.tabs[k];

        var link = document.createElement("a");
        link.href = tab.url;
        link.textContent = tab.title;
        link.title = tab.title;
        link.classList.add("link");

        sessionDiv.appendChild(link);
      }

      sessionsDiv.appendChild(sessionDiv);
    }

    deviceDiv.appendChild(sessionsDiv);

    document.getElementById("main").appendChild(deviceDiv);
  }
});
