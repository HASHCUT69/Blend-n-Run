$(document).ready(function () {
  let clickCount = localStorage.getItem('clickCount');
  checkifClickCount(clickCount);


  $("#run-script-btn").click(function () {
    let text = $("#content").val();
    clickCount = localStorage.getItem('clickCount');

    chrome.storage.local.set({ lastCopied: text }, function () { });
    copyURL();

    const clicked = localStorage.getItem("clickedCard");
    if (clicked !== "true") {
      if (clickCount >= 9 && clickCount % 10 === 9) {
        showCardPopup();
      }
      localStorage.setItem('clickCount', ++clickCount);
    }

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

const checkifClickCount = (clickCount) => {
  const clicked = localStorage.getItem("clickedCard");
  if (clicked !== "true") {
    if (clickCount >= 10 && clickCount % 10 === 0) {
      showCardPopup();
    }
  }
}

function showCardPopup() {

  $('#cardModal').modal('show');

  $("#dont-ask").on("click", () => {
    $('#cardModal').modal('hide');
    localStorage.setItem("clickedCard", "true");
  });

  $("#close-card").on("click", () => {
    $('#cardModal').modal('hide');
  });
}