// Changing Text for Introduction
var typed = new Typed(".changingText", {
    strings: ["Problem Solver", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Hamburger Menu
const hamburgerMenu = document.querySelector(".hamburger-container");
let clicked = false;
hamburgerMenu.addEventListener("click", function(){

    clicked = !clicked;

    if(clicked)
    {
        document.querySelector(".secondary-navigation").style.transform = "translateX(0%)";
        document.querySelector(".hamburger-container .open-menu").style.display = "none";
        document.querySelector(".hamburger-container .close-menu").style.display = "block";
    }
    else{
        document.querySelector(".secondary-navigation").style.transform = "translateX(100%)";
        document.querySelector(".hamburger-container .open-menu").style.display = "block";
        document.querySelector(".hamburger-container .close-menu").style.display = "none";
    }
})

