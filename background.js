chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'getSettings') {
      chrome.storage.sync.get(['address', 'time', 'mode'], function (items) {
        sendResponse(items);
      });
      return true;
    }
  });