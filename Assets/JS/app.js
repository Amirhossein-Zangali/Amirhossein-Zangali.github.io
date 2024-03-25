document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    window.addEventListener("scroll", function () {
        if (isScrolledIntoView(menu)) menu.classList.add("fade-in");
    });

    function isScrolledIntoView(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }
});