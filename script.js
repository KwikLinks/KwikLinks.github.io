function updateFaviconAndTitle() {
    const urlInput = document.getElementById("urlInput").value;
    if (urlInput) {
        fetch(urlInput)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "text/html");
                const title = doc.querySelector("title");
                const favicon = doc.querySelector("link[rel*='icon']") || doc.querySelector("link[rel='shortcut icon']");

                if (title) {
                    document.title = title.textContent;
                }
                if (favicon) {
                    const faviconHref = favicon.getAttribute("href");
                    document.querySelector("link[rel='icon']").setAttribute("href", faviconHref);
                }
            })
            .catch(error => {
                console.error("Error fetching and updating favicon and title:", error);
            });
    }
}
