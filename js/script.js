const swiper = new Swiper('.friends-main__slider', {

    loop: true,
    speed: 800,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    slidesPerGroup: 1,

    breakpoints: {
        767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 40,
        },
        1180: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 90,
        },
    },
});
