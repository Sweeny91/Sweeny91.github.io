// this function is used to open all external links in their own respective tabs
// Read more: https://html.com/attributes/a-target/#ixzz7A0XctpNX
function externalLinks() {
    for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
        var b = c[a];
        b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
    }
};

externalLinks();