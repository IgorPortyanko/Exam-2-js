const swiper = new Swiper('.news-swiper', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,

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

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
        1200: {
            slidesPerView: 3,
        }
    }

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

window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  resizableSwiper(
    '(max-width: 576px)',
    '.gallery-swiper',
    {
      loop: true,
      slidesPerView: 1,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination-gal',
        clickable: true,
    }
    }
  );
});