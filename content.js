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
      var localTime = new Date(time);
      var utcTime = new Date(localTime.getTime() + localTime.getTimezoneOffset() * 60000);
      var arrivalTime = Math.floor(utcTime.getTime() / 1000);

      if (timeOption === 'arriveBy') {
        apiUrl += `&arrival_time=${arrivalTime}`;
      } else if (timeOption === 'departAt') {
        apiUrl += `&departure_time=${arrivalTime}`;
      }
    }

    console.log('API URL:', apiUrl);

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        var duration = data.routes[0].legs[0].duration.text;
        var travelInfoText = `<p><strong>Travel time:</strong> ${duration}</p>`;

        if (data.transitInfo) {
          var { numTransits, totalWalkingTime } = data.transitInfo;
          travelInfoText += `<p><strong>Number of transits:</strong> ${numTransits}</p>`;
          travelInfoText += `<p><strong>Total walking time:</strong> ${Math.floor(totalWalkingTime / 60)} min</p>`;
        }

        console.log('Travel info:', travelInfoText);

        showPopupMessage(travelInfoText);
      })
      .catch(error => {
        console.error('Error:', error);
        showPopupMessage('<p>Error calculating travel time.</p>');
      });
  }
});