document.addEventListener("DOMContentLoaded", function() {
    const aboutBlankSwitch = document.getElementById("aboutBlankSwitch");
    const aboutBlankFrame = document.getElementById("aboutBlankFrame");

    aboutBlankSwitch.addEventListener("change", function() {
        if (aboutBlankSwitch.checked) {
            // Toggle is on, change the URL to "about:blank"
            window.history.replaceState({}, document.title, "about:blank");
        } else {
            // Toggle is off, load "https://kwiklinks.github.io/"
            aboutBlankFrame.src = "https://kwiklinks.github.io/";
        }
    });
});
