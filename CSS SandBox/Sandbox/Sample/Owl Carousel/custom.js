(function ($) {
  "use strict";

  // :: 2.0 Slides Active Code
   if ($.fn.owlCarousel) {

    var heroSlide = $(".hero-slides");
    heroSlide.owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
   }
  })(jQuery);