const sliderPortfolio = () => {

  const miniSliderPortfolio = new Swiper('.slider-portfolio', {
    init: true,
    // Свои классы
    wrapperClass: "slider-portfolio__wrapper",
    slideClass: "slider-portfolio__screen",

    // Вертикальный слайдер
    direction: 'horizontal',

    // Количество сладов для показа
    slidesPerView: "auto",
    loop: true,

    autoplay: {
      delay: 20000000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    },

    // Скорость
    speed: 600,

    // Навигация
    navigation: {
      nextEl: '.slider-portfolio__button-next',
      prevEl: '.slider-portfolio__button-prev',
      disabledClass: "slider-portfolio__button-disabled"
    },
    pagination: {
      el: '.slider-portfolio__pagination',
      type: 'bullets',
      bulletClass: "slider-portfolio__pagination-bullet",
      bulletActiveClass: "slider-portfolio__pagination-bullet_active",
      clickable: true
    },
    // События
    on: {
      init: function () {

      }
    }
  });
}

export default sliderPortfolio;
