//   section menu on scroll
$(window).scroll(function() {
    if ($(window).scrollTop() <= 0) {
      $(".navbar").removeClass( "menu-scroll-bg" );
    }
    if ($(window).scrollTop() > 0) {
      $(".navbar").addClass( "menu-scroll-bg" );
    }
  });