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

/* 送信ボタンの制御 */
$(document).ready(function() {
    const $submitBtn = $('#js-submit');
    const $form = $('#form');

    console.log('$form:', $form); // ← ここに追加
    console.log('$submitBtn:', $submitBtn); 

    $form.find('input, textarea').on('change', function() {
        console.log('変更検知');

        const allFilled = 
            $form.find('input[type="text"]').toArray().every(el => $(el).val() !== '') &&
            $form.find('input[type="email"]').val() !== '' &&
            $form.find('input[type="tel"]').val() !== '' &&
            $form.find('textarea').val() !== '' &&
            $form.find('input[type="radio"]:checked').length > 0;

        console.log('allFilled:', allFilled); 

        $submitBtn.prop('disabled', !allFilled);

        if (allFilled) {
            $submitBtn.addClass('is-active');
        } else {
            $submitBtn.removeClass('is-active');
        }
    });
});