chrome.storage.sync.get(['address', 'time', 'mode'], function (items) {
  var address = items.address;
  var time = items.time;
  var mode = items.mode;

  console.log('Stored address:', address);
  console.log('Stored time:', time);
  console.log('Stored mode:', mode);

  if (address && time && mode) {
    var adAddress = document.querySelector('.address-2094065249').textContent;
    console.log('Ad address:', adAddress);

    var apiKey = config.API_KEY;
    var apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(adAddress)}&destination=${encodeURIComponent(address)}&mode=${mode}&key=${apiKey}`;

    console.log('API URL:', apiUrl);

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data);

        if (data.routes && data.routes.length > 0) {
          var duration = data.routes[0].legs[0].duration.text;
          console.log('Duration:', duration);

          var travelInfo = document.createElement('div');
          travelInfo.textContent = `Travel time: ${duration}`;
          document.querySelector('.mapLink-4124468002').insertAdjacentElement('afterend', travelInfo);
        } else {
          console.error('No routes found in API response');
        }
      })
      .catch(error => console.error('Error:', error));
  } else {
    console.log('Address, time, or mode not set');
  }
});