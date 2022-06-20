/*global chrome*/
chrome.runtime.onInstalled.addListener(() => {
  console.log("Chrome extension successfully installed!");
  return;
});
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   console.log(tab);
//   return;
// });
//
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.greeting == "hello") {
//     chrome.tabs.captureVisibleTab(null, { format: "png" }, function (data) {
//       console.log("ho");
//       console.log(data);
//     });
//   }
// });
