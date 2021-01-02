$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active')
  });
  
  var swiper = new Swiper('.slider', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 992) {
      $('#price__items:not(.slick-initialized)').slick({
        infinite: false,
        slidesToShow: 3.5,
        draggable: true,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 700,
            settings: {
              infinite: false,
              slidesToShow: 3,
              draggable: true,
              arrows: true,
              dots: false,
            }
          },
          {
            breakpoint: 620,
            settings: {
              infinite: false,
              slidesToShow: 3,
              draggable: true,
              arrows: false,
              dots: true
            }
          },
          {
            breakpoint: 520,
            settings: {
              infinite: false,
              slidesToShow: 2.5,
              draggable: true,
              arrows: false,
              dots: true
            }
          },
          {
            breakpoint: 440,
            settings: {
              infinite: false,
              slidesToShow: 2,
              draggable: true,
              arrows: false,
              dots: true
            }
          },
        ]
      });
    } else {
      $("#price__items.slick-initialized").slick("unslick");
    }
  });

});