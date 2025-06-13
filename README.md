# WebKit Bug Minimal Example App

## Setup
```
npm i
npm start
```

## Reproducing the issue
1. Run the app via `npm start`
1. Switch to Safari app
1. Open a page (e.g. macys.com)
1. Enable the extension, open it, and allow full permissions
1. Open extension background page via Mac's Safari > Develop menu
1. Browse safari and observe bg page console logs. You should see `content script responded`
1. Run `goToUrlA()` or `goToUrlB()` in the bg console. This will update the URL of the tab and will likely trigger the issue.
1. Browse around, switching between manual browsing and the `goToUrlA/goToUrlB` methods
1. Issue should be reproduced. Sometimes you will see `content script responded` and sometimes not, often depending on the domain.
1. Open a new tab and start over to reproduce again.

## MyExtension vs. MyExtension2
MyExtension adds onMessage listeners in the initial content script specified in the manifest.

MyExtension2 adds onMessage listeners via a second script, injected with browser.tabs.executeScript by the bg script after receiving the loaded message from the content script.

To switch between the extensions, find `react-native-safari-extension` in the `app.json` file and change the `folderName` property.