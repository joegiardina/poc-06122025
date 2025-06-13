const listener = (request, sender, sendResponse) => {
  console.log("Got msg from bg: ", request);
  browser.runtime.sendMessage('content script responded');
};
browser.runtime.onMessage.removeListener(listener);
browser.runtime.onMessage.addListener(listener);
browser.runtime.sendMessage('content script listeners registered');