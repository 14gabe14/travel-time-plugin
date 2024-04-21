chrome.storage.sync.get(['address', 'time', 'mode', 'timeOption'], function (items) {
  var address = items.address;
  var time = items.time;
  var mode = items.mode;
  var timeOption = items.timeOption;

  console.log('Stored address:', address);
  console.log('Stored time:', time);
  console.log('Stored mode:', mode);
  console.log('Stored timeOption:', timeOption);

  if (address && mode) {
    var adAddress = document.querySelector('.address-2094065249').textContent;
    console.log('Ad address:', adAddress);

    var apiUrl = `http://localhost:3000/api/directions?origin=${encodeURIComponent(adAddress)}&destination=${encodeURIComponent(address)}&mode=${mode}`;

    if (timeOption && time) {
      apiUrl += `&timeOption=${timeOption}&time=${time}`;
    }

    console.log('API URL:', apiUrl);

    var travelInfo = document.createElement('div');
    travelInfo.id = 'travelInfo';
    travelInfo.textContent = 'Calculating travel time...';
    document.querySelector('.mapLink-4124468002').insertAdjacentElement('afterend', travelInfo);

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        var duration = data.routes[0].legs[0].duration.text;
        var travelInfoText = `Travel time: ${duration}`;

        if (data.transitInfo) {
          var { numTransits, totalWalkingTime } = data.transitInfo;
          travelInfoText += `<br>Number of transits: ${numTransits}<br>Total walking time: ${Math.floor(totalWalkingTime / 60)} min`;
        }

        document.getElementById('travelInfo').innerHTML = travelInfoText;
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('travelInfo').textContent = 'Error calculating travel time.';
      });
  }
});