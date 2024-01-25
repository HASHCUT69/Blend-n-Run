$(document).ready(function () {
  let clickCount = 0;
  let displayCount = 0;


  $("#run-script-btn").click(function () {
    // storing data in local storage
    let text = $("#content").val();

    chrome.storage.local.set({ lastCopied: text }, function () { });
    copyURL();

    // Check if the user should see the card
    if (clickCount % 5 === 0) {
      displayCount++;

      // Show card as a popup every 20 times
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
  // Check if the user has clicked on the card before
  const clicked = localStorage.getItem("clicked");

  if (clicked !== "true") {
    // Show the card modal
    $('#cardModal').modal('show');

    $("#dont-ask").on("click", () => {
      $('#cardModal').modal('hide');
      localStorage.setItem("clicked", "true");
    });

    // Add event listener for closing the card
    $("#close-card").on("click", () => {
      // Hide the modal
      $('#cardModal').modal('hide');

      // Update localStorage to indicate that the user has clicked on the card
      localStorage.setItem("clicked", "true");
    });
  }
}