// swiper

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



// burger

const iconBurger = document.querySelector('.header__burger');
const menuHeader = document.querySelector('.menu-header')

if (iconBurger) {
    iconBurger.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconBurger.classList.toggle('_active');
        menuHeader.classList.toggle('_active');
        e.stopPropagation();
    })
}

window.addEventListener('click', function () {
    if (iconBurger.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconBurger.classList.remove('_active');
        menuHeader.classList.remove('_active');
    }
})


// popup

const buttonsFriends = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const buttonsClose = document.querySelectorAll('.popup__close');
const timeout = 800;

if (buttonsFriends.length > 0) {
    for (let i = 0; i < buttonsFriends.length; i++) {
        const buttonFriends = buttonsFriends[i];
        buttonFriends.addEventListener('click', function (e) {
            const popupName = buttonFriends.getAttribute('href').replace('#', '');
            const curentpopup = document.getElementById(popupName);
            popupOpen(curentpopup);
            e.preventDefault();
        })
    }
}

if (buttonsClose.length > 0) {
    for (let i = 0; i < buttonsClose.length; i++) {
        const buttonClose = buttonsClose[i];
        buttonClose.addEventListener('click', function (e) {
            const popupActive = buttonClose.closest('.popup');
            popupClose(popupActive);
            e.preventDefault();
        })
    }
}

function popupOpen(curentpopup) {
    if (curentpopup) {
        bodyLock();
        curentpopup.classList.add("_active");

        curentpopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__container')) {
                const popupActive = e.target.closest('.popup');
                popupClose(popupActive);
            }

        })
    }

}

function bodyLock() {
    const lockPadding = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    body.style.paddingRight = lockPadding;
    body.classList.add('_lock');
}


function popupClose(popupActive) {
    popupActive.classList.remove("_active");
    bodyUnLocck();
}

function bodyUnLocck() {
    setTimeout(() => {
        body.style.paddingRight = 0;
        body.classList.remove('_lock');
    }, timeout);
}