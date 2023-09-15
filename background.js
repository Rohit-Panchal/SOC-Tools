

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    title: "SOC Helper",
    contexts: ["selection"],
    id: "sochelper",
  });

  chrome.contextMenus.create({
    title: "IP Check",
    contexts: ["selection"],
    parentId: "sochelper",
    id: "ipcheck",
  });

  chrome.contextMenus.create({
    title: "URL Check",
    contexts: ["selection"],
    parentId: "sochelper",
    id: "urlcheck",
  });

  chrome.contextMenus.create({
    title: "Check IP in SPUR",
    contexts: ["selection"],
    parentId: "ipcheck",
    id: "SPUR",
  });

  chrome.contextMenus.create({
    title: "Geolocation",
    contexts: ["selection"],
    parentId: "ipcheck",
    id: "glocation",
  });

  chrome.contextMenus.create({
    title: "Virus Total",
    contexts: ["selection"],
    parentId: "ipcheck",
    id: "vtotal",
  });

  chrome.contextMenus.create({
    title: "Other",
    contexts: ["selection"],
    parentId: "urlcheck",
    id: "Other",
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "SPUR") {
    var url = "https://spur.us/context/" + encodeURIComponent(info.selectionText);
    chrome.tabs.create({ url: url });
  } else if (info.menuItemId === "glocation") {
    var url = "https://www.iplocation.net/ip-lookup/" + encodeURIComponent(info.selectionText);
    chrome.tabs.create({ url: url });
  } else if (info.menuItemId === "vtotal") {
    var url = "https://www.virustotal.com/gui/file/" + encodeURIComponent(info.selectionText);
    chrome.tabs.create({ url: url });
  } else if (info.menuItemId === "Other") {
    var url = "https://www.virustotal.com/gui/file/" + encodeURIComponent(info.selectionText);
    chrome.tabs.create({ url: url });
  }
});




// // ********************SPUR**************************

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.contextMenus.create({
//     title: "Check IP in SPUR",
//     contexts: ["selection"],
//     id: "SPUR",
//   });
// });

// chrome.contextMenus.onClicked.addListener(function(info, tab) {
//   if (info.menuItemId === "SPUR") {
//     var url = "https://spur.us/context/" + encodeURIComponent(info.selectionText);
//     chrome.tabs.create({ url: url });
//   }
// });

// // ******************GEO LOCATION****************************

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.contextMenus.create({
//     title: "Geolocation",
//     contexts: ["selection"],
//     id: "glocation",
//   });
// });

// chrome.contextMenus.onClicked.addListener(function(info, tab) {
//   if (info.menuItemId === "glocation") {
//     var url = "https://www.iplocation.net/ip-lookup/" + encodeURIComponent(info.selectionText);
//     chrome.tabs.create({ url: url });
//   }
// });

// // *********************VIRUS TOTAL*************************

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.contextMenus.create({
//     title: "Virus Total",
//     contexts: ["selection"],
//     id: "vtotal",
//   });
// });

// chrome.contextMenus.onClicked.addListener(function(info, tab) {
//   if (info.menuItemId === "vtotal") {
//     var url = "https://www.virustotal.com/gui/file/" + encodeURIComponent(info.selectionText);
//     chrome.tabs.create({ url: url });
//   }
// });

// // ***********************OTHER***********************

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.contextMenus.create({
//     title: "Other",
//     contexts: ["selection"],
//     id: "Other",
//   });
// });

// chrome.contextMenus.onClicked.addListener(function(info, tab) {
//   if (info.menuItemId === "Other") {
//     var url = "https://www.virustotal.com/gui/file/" + encodeURIComponent(info.selectionText);
//     chrome.tabs.create({ url: url });
//   }
// });


// // **********************************************



