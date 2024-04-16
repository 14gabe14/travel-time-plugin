chrome.storage.sync.get(['address', 'time', 'mode'], function (items) {
    var address = items.address;
    var time = items.time;
    var mode = items.mode;
  
    if (address && time && mode) {
      var adAddress = document.querySelector('.address').textContent;
      const apiKey = config.API_KEY;
      var apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(adAddress)}&destination=${encodeURIComponent(address)}&mode=${mode}&key=${apiKey}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          var duration = data.routes[0].legs[0].duration.text;
          var travelInfo = document.createElement('div');
          travelInfo.textContent = `Travel time: ${duration}`;
          document.querySelector('.map-link').appendChild(travelInfo);
        })
        .catch(error => console.error('Error:', error));
    }
  });