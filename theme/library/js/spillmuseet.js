(function($) {
  $(function() {
    var newsFromTop = $('.articles-list li');
    $('.articles-list li').each(function(index) {
      console.log($(this).offset().top);
    });

    setActive = function(number) {
      newsFromTop.each(function(index) {
        var height= $(this).offset().top;
        if(height <= (number+window.innerHeight-60)) {
          console.log('active');
          $(this).addClass('active');
        }
      });
    };
    setActive(60);
    $('.mobile-menu-toggle').on('touchstart', function () {
      event.stopPropagation();
      $('.main-navigation').toggleClass('active');
    });
    var headerToggle = false;

    var headerAdjust = function (event) {
        setActive(window.scrollY);

        if(!headerToggle && window.scrollY >= 120) {
          $('.main-navigation')
          .addClass('tiny')
          .animate({
            'margin-top': '0'
          }, 500);

          headerToggle = true;

        }
        if(headerToggle && window.scrollY < 120) {
          $('.main-navigation')
          .removeClass('tiny')
          .css('margin-top', 'auto');
          headerToggle = false;
        }
      },

      adjustMenu = function (event) {

        if(!headerToggle && window.scrollY >= 120) {
          $('.main-navigation')
          .addClass('tiny');
          headerToggle = true;
        }
        if(headerToggle && window.scrollY < 120) {
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
    $('.gallery').each(function(key, node) {
      $(node).retroGallery();
    });

    $('img').attr({
      'width': '',
      'height': ''
    });

    if($('#videos-wrapper').length) {
      $('#videos-wrapper').retroVideo();
    }

    if($('#rad-radio').length) {
      $('#rad-radio').retroRad();
    }

    $('.wp-caption').attr('style', '');

    if($('.articles').length) {
      var articlesOffset = $('.articles').offset().top;  
    }

    if($('.main-article h2').length) {
      var element = $('.main-article h2')[0] || $('.main-article h1')[0];  
    }
    $('span').css('color', 'rgba(0,0,0,0.6)');
    var height = $(element).height();
  });
})(jQuery);