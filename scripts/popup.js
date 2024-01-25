$(document).ready(function () {
  let clickCount = 0;
  let displayCount = 0;


  $("#run-script-btn").click(function () {
    let text = $("#content").val();

    chrome.storage.local.set({ lastCopied: text }, function () { });
    copyURL();

    if (clickCount % 5 === 0) {
      displayCount++;
      if (displayCount % 10 === 0) {
        showCardPopup();
      }
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
  $("#google-icon").hover(
    function () {
      $(".b3").css("opacity", 1);
    },
    function () {
      $(".b3").css("opacity", 0);
    }
  );
  $("#close-card").click(function () {
    clickCount++;
  });
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

function showCardPopup() {
  const clicked = localStorage.getItem("clicked");

  if (clicked !== "true") {
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
}