/* スワイパーの設定*/
const swiper = new Swiper('.swiper', {
    loop: false,
    loopAdditionalSlides: 1,
    autoplay: {
        delay: 4000,/* 4秒ごとにスワイプされる*/
        disableOnInteraction: false,
    },
    speed: 800,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 56,

    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        // when window width is >= 640px
        700: {
            slidesPerView: 'auto',
        }
    }
});

