var swipers = new Swiper('.swiper-containers', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  loop:true,
  toggle:true,
  allowTouchMove:true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
    
  },
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  }
});
var swiperz = new Swiper('.swiper-containerz', {
  slidesPerView: 7,
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 1000,
    reverseDirection:true,
  },
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});
