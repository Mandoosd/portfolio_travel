$(function () {

    var Main_Slide_Wrap = new Swiper('.main_slide_wrap', {
        loop: true,
        grabCursor: true,
        speed: 800,
        effect: "creative",

        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },

        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var Mbn_Slide = new Swiper('.mbn_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 800,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


});