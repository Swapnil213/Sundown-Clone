// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

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



// Swiper //
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});