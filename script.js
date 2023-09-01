document.addEventListener("DOMContentLoaded", function() {
    const aboutBlankSwitch = document.getElementById("aboutBlankSwitch");

    aboutBlankSwitch.addEventListener("change", function() {
        if (aboutBlankSwitch.checked) {
            // Toggle is on, open a new tab with the specified URL
            window.open("https://kwiklinks.github.io/", "_blank");
        } else {
            // Toggle is off, do nothing (stay on the current page)
        }
    });
});
