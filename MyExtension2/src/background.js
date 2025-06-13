const URL_A = 'https://macys.com';
const URL_B = 'https://jcrew.com';

function updateTab(url) {
  browser.tabs.query({active: true}, ([tab]) =>
    browser.tabs.update(tab.id, {url})
  );
}

window.goToUrlA = () => updateTab(URL_A);
window.goToUrlB = () => updateTab(URL_B);

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  if (request.startsWith('content script loaded')) {
    browser.tabs.executeScript(sender.tab.id, {file: 'src/setupListeners.js'});
    return;
  } else if (request.startsWith('content script responded')) {
    return;
  }
  browser.tabs.sendMessage(sender.tab.id, 'bg resp to ' + request)
});
