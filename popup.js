document.addEventListener('DOMContentLoaded', function () {
  var saveButton = document.getElementById('saveSettings');
  saveButton.addEventListener('click', saveSettings);

  chrome.storage.sync.get(['address', 'time', 'mode', 'timeOption'], function (items) {
    document.getElementById('address').value = items.address || '';
    document.getElementById('time').value = items.time || '';
    document.getElementById('mode').value = items.mode || 'driving';
    document.getElementById('timeOption').value = items.timeOption || '';
  });
});

function saveSettings() {
  var address = document.getElementById('address').value;
  var time = document.getElementById('time').value;
  var mode = document.getElementById('mode').value;
  var timeOption = document.getElementById('timeOption').value;

  chrome.storage.sync.set({ address: address, time: time, mode: mode, timeOption: timeOption }, function () {
    window.close();
    refreshKijijiPage();
  });
}

function refreshKijijiPage() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    if (currentTab.url.includes('kijiji.ca')) {
      chrome.tabs.reload(currentTab.id);
    }
  });
}