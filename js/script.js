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

// エラーメッセージ
$('input, textarea').each(function() {
    $(this).on('change', function() {
        if ($(this).is(':invalid')) {
            $(this).parents('.contact__row').addClass('is-error');
            $(this).parents('.contact__row').find('.error-text').attr('aria-hidden', false);
        } else {
            $(this).parents('.contact__row').removeClass('is-error');
            $(this).parents('.contact__row').find('.error-text').attr('aria-hidden', true);
        }
    });
});

$('#js-submit').on('click', function() {
    $('input, textarea').each(function() {
        if ($(this).is(':invalid')) {
            $(this).parents('.contact__row').addClass('is-error');
            $(this).parents('.contact__row').find('.error-text').attr('aria-hidden', false);
        } else {
            $(this).parents('.contact__row').removeClass('is-error');
            $(this).parents('.contact__row').find('.error-text').attr('aria-hidden', true);
        }
    });
});

//ハンバーガーメニュー
// ハンバーガーメニューの開閉
$('.header__hamburger').on('click', function() {
    // ボタン・ナビ・オーバーレイのis-openを付け外し
    $(this).toggleClass('is-open');
    $('.gnav').toggleClass('is-open');
    $('.overlay').toggleClass('is-open');
});

// オーバーレイをクリックしたら閉じる
$('.overlay').on('click', function() {
    $('.header__hamburger').removeClass('is-open');
    $('.gnav').removeClass('is-open');
    $(this).removeClass('is-open');
});

// ナビのリンクをクリックしたら閉じる
$('.gnav__item a').on('click', function() {
    $('.header__hamburger').removeClass('is-open');
    $('.gnav').removeClass('is-open');
    $('.overlay').removeClass('is-open');
});