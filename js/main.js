(function($) {
  "use strict";

  $('#mobile-menu').meanmenu({
    meanScreenWidth: "992",
    meanMenuContainer: '.mobile-menu',
    onePage: true,
  });



  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll < 50) {
      $("#sticky-header").removeClass("sticky-menu");
    } else {
      $("#sticky-header").addClass("sticky-menu");
    }
  });
  //transparent
  function smoothSctollTop() {
    $('.main-menu ul li > a').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 5
        }, 800);
      }
    });
  }
  smoothSctollTop();
  //one page Menu Nav


  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.goTop').fadeIn();
    } else {
      $('.goTop').fadeOut();
    }
  });

  $(".goTop").on('click', function() {
    $("body, html").animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $('.testimonial-active').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: '<button type="button" class="prevarrow"><span><i class="fas fa-arrow-left"></i></span></button>',
    nextArrow: '<button type="button" class="nextarrow"><span><i class="fas fa-arrow-right"></i></span></button>',
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.brand-active').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function(e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slier[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      fade: true,
      prevArrow: '<button type="button" class="prevarrow"><span><i class="fas fa-arrow-left"></i></span></button>',
      nextArrow: '<button type="button" class="nextarrow"><span><i class="fas fa-arrow-right"></i></span></button>',
      arrows: true,
      responsive: [{
        breakpoint: 992,
        settings: {
          dots: false,
          fade: false,
          arrows: false
        }
      }]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  new WOW().init();

})(jQuery);
