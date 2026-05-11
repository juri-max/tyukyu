/* スワイパーの設定（製品一覧）*/
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


/*アコーディオン（FAQ) */

$(function() {
  $('.faq__question').on('click', function() {
    const $item = $(this).closest('.faq__item');

    $('.faq__item').not($item)
      .removeClass('is-open')
      .find('.faq__answer').slideUp(300);

    $item.toggleClass('is-open');
    $item.find('.faq__answer').slideToggle(300);
  });
});