"use strict";

chrome.sessions.getDevices({}, function(sessions){
  for (var i in sessions) {
    var device = sessions[i];
    var deviceDiv = document.createElement("div");
    deviceDiv.classList.add("device");

    var deviceName = document.createElement("div");
    deviceName.innerHTML = device.deviceName;
    deviceName.classList.add("device-name");
    deviceDiv.appendChild(deviceName);

    for (var j in device.sessions) {
    var session = device.sessions[j];

      var sessionDiv = document.createElement("div");
      sessionDiv.classList.add("session");

      for (var k in session.window.tabs) {
        var tab = session.window.tabs[k];

        var link = document.createElement("a");
        link.href = tab.url;
        link.innerHTML = tab.title;
        link.title = tab.title;
        link.classList.add("link");

        sessionDiv.appendChild(link);
      }

      deviceDiv.appendChild(sessionDiv);
    }

    document.getElementById("main").appendChild(deviceDiv);
  }
});
