$(document).ready(function () {
  let clickCount = localStorage.getItem('clickCount');
  checkifClickCount(clickCount, 'out');


  $("#run-script-btn").click(function () {
    let text = $("#content").val();
    clickCount = localStorage.getItem('clickCount');

    chrome.storage.local.set({ lastCopied: text }, function () { });
    copyURL();

    checkifClickCount(clickCount, 'in');

  });

  $(".links").click(function () {
    var link = $(this).attr("name");
    chrome.tabs.create({
      url: link,
      active: true,
    });
  });
  $("#github-icon").hover(
    function () {
      $(".b3").css("opacity", 1);
    },
    function () {
      $(".b3").css("opacity", 0);
    }
  );
});
const copyURL = () => {
  const copyDiv = document.querySelector(".copyAlert:not(.animate)");
  if (copyDiv) {
    copyDiv.classList.add("animate");
    copyDiv.addEventListener("animationend", () =>
      copyDiv.classList.remove("animate")
    );
  }
};

const checkifClickCount = (clickCount, cond) => {
  const clicked = localStorage.getItem("clicked");
  if (clicked !== true) {
    if (clickCount >= 10 && clickCount % 10 === 0) {
      console.log("Clicking");
      showCardPopup(clicked);
      if (cond === 'out') localStorage.setItem('clickCount', ++clickCount);
    }
    if (cond === 'in') localStorage.setItem('clickCount', ++clickCount);
  }
}

function showCardPopup(clicked) {

  $('#cardModal').modal('show');

  $("#dont-ask").on("click", () => {
    $('#cardModal').modal('hide');
    localStorage.setItem("clicked", "true");
  });

  $("#close-card").on("click", () => {
    $('#cardModal').modal('hide');

    localStorage.setItem("clicked", "true");
  });
}