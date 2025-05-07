$(function() {
  $(window).on('load', function() {
    setTimeout(function() {
      if (!$('body').hasClass('is-loaded')) {
        $('body').addClass('is-loaded');
        $('.preloader').fadeOut(500);
      }
    }, 1000)
  });

  setTimeout(function() {
    if (!$('body').hasClass('is-loaded')) {
      $('body').addClass('is-loaded');
      $('.preloader').fadeOut(500);
    }
  }, 5000);

  let scrollTimeout;
  $(window).on('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      if ($(window).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    }, 100);
  });

  let resizeTimeout;
  $(window).on('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
    }, 200);
  });

  $('.toggle-nav').on('click', function() {
    $('.nav').toggleClass('is-active');
    $('body').toggleClass('menu-open');
  });

  $('a').filter(function() {
    return this.hostname && this.hostname !== location.hostname;
  }).attr('target', '_blank').attr('rel', 'noopener noreferrer');

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
    }
  });
});