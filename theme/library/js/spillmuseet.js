

(function($) {

  console.log('fjert');

  


  $('.mobile-menu-toggle').on('touchstart', function () {
    event.stopPropagation();
    $('.main-navigation').toggleClass('active');
  });
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
  var articlesOffset = $('.articles').offset().top;
  var element = $('.main-article h2')[0] || $('.main-article h1')[0];
  var fromTop = $(element).offset().top - articlesOffset;
  var height = $(element).height();


  if($('.article.fb-like').length) {
    console.log(fromTop, height, 60);
    $('.article.fb-like').css({
      'top': fromTop + height + 80 + 'px'
    });
  }

})(jQuery);