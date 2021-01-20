$(function(){

  var hh = $('.header-top').height() + 50;
  
  $(window).scroll(function(){
    if ($(this).scrollTop() > hh){
      $('.header-top').addClass('header-top__fixed');
    }else{
      $('.header-top').removeClass('header-top__fixed');
    }
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu').toggleClass('menu--active');
    $('body').toggleClass('look');

  });
  
  
  $('.slider').slick({
    infinite: false,
    slidesToShow: 1.4,
    draggable: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: false,
          slidesToShow: 1.6,
          draggable: true,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 1120,
        settings: {
          infinite: false,
          slidesToShow: 1.8,
          draggable: true,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 900,
        settings: {
          infinite: false,
          slidesToShow: 1,
          draggable: true,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 620,
        settings: {
          infinite: false,
          slidesToShow: 1,
          draggable: true,
          arrows: false,
          dots: true,
        }
      },
    ]
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