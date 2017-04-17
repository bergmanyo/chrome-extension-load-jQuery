chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    code: "(function(d,s){s=d.createElement('script');s.src='//ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.js';(d.head||d.documentElement).appendChild(s)})(document);"
  });
});