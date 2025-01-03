document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and load content into a given element ID
    function loadContent(id, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // Insert the loaded content
                document.getElementById(id).innerHTML = data;

                // Wait for MathJax to load, then process the new content
                if (window.MathJax) {
                    MathJax.startup.promise.then(() => {
                        MathJax.typesetPromise([document.getElementById(id)])
                            .catch((err) => console.error('MathJax processing error:', err));
                    });
                }
            })
            .catch(error => console.error(`Error loading ${url}:`, error));
    }

    // Load header
    loadContent("header", "header.html");

    // Load footer
    loadContent("footer", "footer.html");

    // Load articles
    loadContent("ascii", "articles/ascii.html");
    loadContent("collatz", "articles/collatz.html");
    loadContent("flocking", "articles/flocking.html");
    loadContent("hyper parameters", "articles/hyper_parameters.html");
    loadContent("cmyk", "articles/cmyk.html");
});
