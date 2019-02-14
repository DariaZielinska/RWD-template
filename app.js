document.addEventListener('DOMContentLoaded', function(){

    const hamburger = document.querySelector(".hamburger-menu");

    hamburger.addEventListener("click", function () {

        hamburger.classList.toggle("change");
        document.querySelector(".page-header").classList.toggle("nav-opened");
        document.querySelectorAll(".page-title")[0].classList.toggle("hidden");
        document.querySelectorAll(".page-title")[1].classList.toggle("hidden");
    })
}, true);
