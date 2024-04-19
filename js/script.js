const swiper = new Swiper('.main-friends__slider', {

    loop: true,
    speed: 800,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 3,

    spaceBetween: 90,



    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //     },
    //     990: {
    //         slidesPerView: 3,
    //     }
    // },
});
