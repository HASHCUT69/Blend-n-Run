$(document).keydown(function (event) {
  if (
    (event.altKey && event.which === 88) ||
    (event.ctrlKey && event.shiftKey && event.which === 88)
  ) {
    chrome.storage.local.get(["lastCopied"], function (result) {
      var unmodifiedText = result.lastCopied;
      var modifiedText = "";
      for (var i = 0; i < unmodifiedText.length; i++) {
        var c = unmodifiedText[i];
        if (c == "{" || c == "}") {
          modifiedText += "{" + c + "}";
        } else {
          modifiedText += c;
        }
      }
      $(document.activeElement).sendkeys(modifiedText);
    });
  }
});