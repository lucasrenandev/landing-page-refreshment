
const menuBtn = document.querySelector(".menu-btn")
const menuImage = document.querySelector(".menu-btn img")
const nav = document.querySelector("nav ul")

menuBtn.addEventListener("click", menuShow)

function menuShow() {

    if(menuImage.getAttribute("src") === "img/menu.png") {
        menuImage.setAttribute("src", "img/close.png")
    }
    else {
        menuImage.setAttribute("src", "img/menu.png")
    }

    nav.classList.toggle("active")

}