// const scroll = new LocomotiveScroll({
//     el: document.querySelector('body'),
//     smooth: true
// });

function page4Animation() {
    var elemContainer = document.querySelector("#elem-container");
    var image = document.querySelector("#fixed-image");

    elemContainer.addEventListener("mouseenter", function () {
        image.style.display = "block";
    });

    elemContainer.addEventListener("mouseleave", function () {
        image.style.display = "none";
    })

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var img = e.getAttribute("data-image");
            image.style.backgroundImage = `url(${img})`;
        });
    });
}

function menuAnimation() {

    var ham = document.querySelector("#ham");
    var menu = document.querySelector("nav h3");
    var logo = document.querySelector("nav img");
    var flag = 0;
    menu.addEventListener("click", function () {
        if (flag == 0) {
            ham.style.top = 0;
            logo.style.opacity = 0;
            flag = 1;
        } else if (flag == 1) {
            ham.style.top = "-100%";
            logo.style.opacity = 1;
            flag = 0;
        }
    });
}

function loaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(() => {
        loader.style.top = "-100%";
    }, 4000);  
}

page4Animation();
menuAnimation();
loaderAnimation();
