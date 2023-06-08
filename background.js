chrome.contextMenus.create({
  id: "summary",
  title: "Summary Text",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info) {
  if (info.menuItemId === "summary") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { text: info.selectionText });
    });
  }
});
