$(function(){

    $('.testimonials__slider').slick({
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      });

      $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle();
      });

});