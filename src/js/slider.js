const swiper = new Swiper('.review-slider', {
  slidesPerView: 'auto',
  mousewheel: true,
  speed: 600,
  loop: true,
  navigation: {
    nextEl: '.review-slider__next',
  },
});
