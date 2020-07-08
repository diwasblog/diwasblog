
(function ($) {
  "use strict";

  var browserWindow = $(window);
var navbar_toggler = $('.classy-navbar-toggler');

if ($.fn.sticky) {
  $("#stickyMenu").sticky({
      topSpacing: 0
  });
}

if ($.fn.classyNav) {
  $('#viralnewsNav').classyNav();
}


  })(jQuery);