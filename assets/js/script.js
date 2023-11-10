(function ($) {
    $(document).ready(function () {
      "use strict";
  // Slider Section 
      // MAIN SPACER
      $(window).on('resize', function () {
        var mastHeight = $('.page-header, .slider').outerHeight();
        $('main').css('margin-top', mastHeight);
      });
  
      $(window).trigger('resize');
  
    });
    // END DOCUMENT READY

  
    // SLIDER
    var interleaveOffset = 0.5;
    var swiperOptions = {
      loop: true,
      speed: 500,
      parallax: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      grabCursor: true,
      watchSlidesProgress: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><circle r="13" cy="15" cx="15"></circle></svg></span>';
        },
      },
      on: {
        progress: function () {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            var slideProgress = swiper.slides[i].progress;
            var innerOffset = swiper.width * interleaveOffset;
            var innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".slide-inner").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }
        },
        touchStart: function () {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function (speed) {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
              speed + "ms";
          }
        }
      }
    };
  
    var swiper = new Swiper(".main-slider", swiperOptions);
  
  
    // DATA BACKGROUND IMAGE
    var pageSection = $("*");
    pageSection.each(function (indx) {
      if ($(this).attr("data-background")) {
        $(this).css("background", "url(" + $(this).data("background") + ")");
      }
    });
  
    // DATA BACKGROUND COLOR
    var pageSection = $("*");
    pageSection.each(function (indx) {
      if ($(this).attr("data-background")) {
        $(this).css("background", $(this).data("background"));
      }
    });
    
  
    var swiper = new Swiper("#review", {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      effect: "coverflow",
      slidesPerView: 1,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 80,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
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
        992: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
    });


    var swiper = new Swiper("#topClient", {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 2,
      grabCursor: true,
      slidesPerView: "auto",     
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        // when window width is >= 640px
        992: {
          slidesPerView: 7,
          spaceBetween: 40
        }
      }
    });

  })(jQuery);
  