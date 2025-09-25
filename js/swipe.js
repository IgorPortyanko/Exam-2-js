const swiper = new Swiper('.news-swiper', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,

    autoplay: {
        delay: 3000,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next-cust',
        prevEl: '.swiper-button-prev-cust',
    },

});

const headerSwiper = new Swiper('.header-swiper', {
    loop: true,
    direction: 'horizontal',
    slidesPerView: 1,

    pagination: {
        el: '.swiper-header-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 3000,
    },

    breakpoints: {
        320: {
            direction: 'horizontal',
        },

        768: {
            direction: 'vertical',
        }
    }

});