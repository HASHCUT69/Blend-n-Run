console.log("running popup.js")

$(document).ready(function () {
    $("#run-script-btn").click(function () {
        // storing data in local storage
        let text = $("#content").val();

        chrome.storage.local.set({ lastCopied: text }, function () {

            console.log('Value is set to ' + text);

        });
        copyURL();
    })

    $('.links').click(function () {
        console.log('clicked');
        var link = $(this).attr("name")
        chrome.tabs.create({
            url: link,
            active: true
        });
    })
    $('#github-icon').hover(function () {

        $('.b3').css('opacity', 1);
        // setTimeout(function () { }, 2000);
    }, function () {
        $('.b3').css('opacity', 0);
    })

})
const copyURL = () => {
    const copyDiv = document.querySelector('.copyAlert:not(.animate)')
    console.log("copied");
    if (copyDiv) {
        copyDiv.classList.add('animate');
        copyDiv.addEventListener('animationend', () => copyDiv.classList.remove('animate'));
    }
};


