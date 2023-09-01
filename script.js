document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById("toggleSwitch");
    const iframe = document.getElementById("external-frame");

    toggleSwitch.addEventListener("change", function() {
        if (toggleSwitch.checked) {
            // Toggle is on, set the iframe source to "https://kwiklinks.github.io/"
            iframe.src = "https://kwiklinks.github.io/";
        } else {
            // Toggle is off, set the iframe source to "about:blank"
            iframe.src = "about:blank";
        }
    });
});
