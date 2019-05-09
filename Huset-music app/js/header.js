const headerClass = document.querySelector(".header");
let overlay = document.querySelector(".overlay");
let openBtn = document.querySelector(".open-btn");
let closeBtn = document.querySelector(".close-btn");

let scrollPosition = window.scrollY;

window.addEventListener("scroll", function () {

    scrollPosition = window.scrollY

    if (scrollPosition >= 1) {
        headerClass.classList.add("scrolled");
    } else {
        headerClass.classList.remove("scrolled");
    }
});

openBtn.addEventListener("click", () => {
    overlay.classList.remove("hide");
    headerClass.classList.add("headerMobileOpen");
    openBtn.classList.add("close-btn");
    setTimeout(function () {
        openBtn.classList.add("hide");
        openBtn.classList.remove("close-btn");
        closeBtn.classList.remove("hide");
    }, 0);
});

closeBtn.addEventListener("click", () => {
    overlay.classList.add("hide");
    headerClass.classList.remove("headerMobileOpen");
    closeBtn.classList.remove("close-btn");
    setTimeout(function () {
        closeBtn.classList.add("hide");
        closeBtn.classList.add("close-btn");
        openBtn.classList.remove("hide");
    }, 0);
});