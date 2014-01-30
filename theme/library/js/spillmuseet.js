(function($) {
  var headerToggle = false;

  var headerAdjust = function (event) {

      $('.main-header').css({
        'background-position-y': window.scrollY * -0.5 + 'px',

      });

      if(!headerToggle && window.scrollY >= 255) {
        $('.main-navigation')
        .addClass('tiny')
        .animate({
          'margin-top': '0'
        }, 500);

        headerToggle = true;

      }
      if(headerToggle && window.scrollY < 255) {
        $('.main-navigation')
        .removeClass('tiny')
        .css('margin-top', 'auto');
        headerToggle = false;
      }
    },

    adjustMenu = function (event) {

      if(!headerToggle && window.scrollY >= 255) {
        $('.main-navigation')
        .addClass('tiny');
        headerToggle = true;
      }
      if(headerToggle && window.scrollY < 255) {
        $('.main-navigation').removeClass('tiny');
        headerToggle = false;
      }
    }


  if(window.innerWidth > 1025) {
    window.addEventListener('scroll', headerAdjust);

  } else {
    document.addEventListener("touchmove", adjustMenu, false);
    document.addEventListener("scroll", adjustMenu, false);
  }

  $('.wp-caption').css('width', '100%');
  $('.gallery').retroGallery();

  $('img').attr({
    'width': '',
    'height': ''
  });

  $('.wp-caption').attr('style', '');

  var element = $('.main-article h2')[0];
  var fromTop = $(element).offset().top;
  var height = $(element).height();

  if($('.fb-like').length) {
    console.log(fromTop, height, 20);
    $('.fb-like').css({
      'top': fromTop + height + 20 + 'px'
    });
  }

})(jQuery);