document.addEventListener("hello", function(data) {
  // console.log(data);
  // console.log(data.detail.message);
  chrome.runtime.sendMessage(data.detail.message);
});
