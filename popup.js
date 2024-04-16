document.addEventListener('DOMContentLoaded', function () {
    var saveButton = document.getElementById('saveSettings');
    saveButton.addEventListener('click', saveSettings);
  
    chrome.storage.sync.get(['address', 'time', 'mode'], function (items) {
      document.getElementById('address').value = items.address || '';
      document.getElementById('time').value = items.time || '';
      document.getElementById('mode').value = items.mode || 'driving';
    });
  });
  
  function saveSettings() {
    var address = document.getElementById('address').value;
    var time = document.getElementById('time').value;
    var mode = document.getElementById('mode').value;
  
    chrome.storage.sync.set({ address: address, time: time, mode: mode }, function () {
      window.close();
    });
  }