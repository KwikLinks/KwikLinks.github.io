document.addEventListener("DOMContentLoaded", function() {
    const aboutBlankSwitch = document.getElementById("aboutBlankSwitch");

    aboutBlankSwitch.addEventListener("change", function() {
        if (aboutBlankSwitch.checked) {
            // Toggle is on, open a new tab with the URL "about:blank"
            window.open("about:blank", "_blank");
        } else {
            // Toggle is off, load "https://kwiklinks.github.io/" in the iframe
            const aboutBlankFrame = document.getElementById("aboutBlankFrame");
            aboutBlankFrame.src = "https://kwiklinks.github.io/";
        }
    });
});
