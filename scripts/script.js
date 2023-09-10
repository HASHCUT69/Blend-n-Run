// console.log("contentScript running");

// document.addEventListener("keydown", keyPressed);

// function keyPressed(e) {
//   //   if(e.code == "Numpad1") {
//   //     console.log("Numpad1 Pressed");
//   //   }
//   console.log(e.which);
// }

$(document).keydown(function (event) {
  console.log(event.which);
  if (
    (event.altKey && event.which === 88) ||
    (event.ctrlKey && event.shiftKey && event.which === 88)
  ) {
    //   var text = "";
    // console.log("altx pressed!");
    chrome.storage.local.get(["lastCopied"], function (result) {
      // console.log("Value currently is " + JSON.stringify(result));

      //   text = result.lastCopied;
      //   text = result.lastCopied.replace(/{/g, "{}");
      //   text = text.replace(/}/g, "{}");
      //   console.log(text);
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
      //   $(document.activeElement).sendkeys(`${text}`);
    });
  }
});

// $(document).keydown(function(event) {
//     if (event.altKey && event.which === 88)
//     {
//         var text;
//         console.log("altx pressed!");
//         chrome.storage.local.get(['lastCopied'], function(result) {
//             console.log('Value currently is ' + JSON.stringify(result));
//             text = result.lastCopied;
//             console.log(text);
//         });
//         console.log(text);
//         $(document.activeElement).sendkeys(text);
//     }
// });
// var temp = "";
// var output = ``;

// function onchange(val) {
//   temp = val;
// }

//Event Listeners for the function

// var runScript = document.getElementById("run-script-btn");
// runScript.addEventListener("click",onclick);

// inputText.addEventListener("change",(e)=>{
//     onchange(e.target.value);
// });

// $("run-script-btn").click(function(){
//     console.log("Done!");
// })

// function onclick() {
//     var inputText = document.getElementById("content").value;
// //   output = "";
// //   removeComment();
//     console.log("Done!");
//     var buttonText = document.getElementById("run-script-btn").innerText = "Copied!";
// }

// chrome.storage.sync.set({'value': theValue}, function() {
//     // Notify that we saved.
//     message('Settings saved');
// });

// function paste() {
//     $(document.activeElement).sendkeys(`${copiedContent}`);
// }

// function copy() {

// }

// chrome.tabs.query({active: true}, function(tabs) {
//     var tab = tabs[0];
//     tab_title = tab.title;
//     chrome.tabs.executeScript(tab.id, {
//       code: 'document.querySelector("h1").textContent'
//     }, display_h1);
// });

// function fireMyEvent(eventType, keyCodeArg=0, charCodeArgs = 0) {
// 	var keyboardEvent = document.createEvent("KeyboardEvent");
// 	var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
// 	keyboardEvent[initMethod](
// 		eventType,
// 		true, // bubbles
// 		true, // cancelable
// 		window,
// 		false, // ctrlKeyArg
// 		false, // altKeyArg
// 		false, // shiftKeyArg
// 		false, // metaKeyArg
// 		keyCodeArg,
// 		charCodeArgs
// 	);
// 	return keyboardEvent;
// }

// const typeInTextarea = (newText, el = document.activeElement) => {
//     // const [start, end] = [el.selectionStart, el.selectionEnd];
//     // el.setRangeText(newText, start, end, 'select');
//     el.value = "aaab";
//     el.dispatchEvent(new KeyboardEvent('keypress', {'key': 'a'}));
// }

// function dispatch_my_event(eventType = "input") {
// 	var keyboardEvent = document.createEvent("Event");
// 	keyboardEvent.initEvent(eventType, true, false);
// 	document.dispatchEvent(keyboardEvent);
// }

// function runScript(){
//     copiedContent = document.getElementById('content');
// }

// $(document).ready(function(){
//     $("textarea").click(function(){
//         console.log("clicked")
//         $(this).sendkeys("hello")

//     });
//     // $("div").click(function(){
//     //     console.log("clicked")
//     //     $(this).sendkeys("hello")

//     // });
//     $("span").click(function(){
//         console.log("clicked")
//         $(this).sendkeys("hello")

//     });

// });
