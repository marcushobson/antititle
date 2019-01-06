chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: removeTitles(tabs[0].url)
  });
});