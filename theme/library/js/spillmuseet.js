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
    $('.donkey-kong-container').addClass('visible');
    console.log($('.donkey-kong-container'));
    $('.mobile-menu-toggle').on('click', function () {
    //$('.mobile-menu-toggle').on('touchstart', function () {
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

    $('.gallery').each(function(key, node) {
      $(node).retroGallery();
    });

    //resize images only if they are bigger than 300
    $('img').each(function (index) {
      if($(this).attr('width') > 300) {
        $(this).attr({
          'width': '',
          'height': ''
        });
      }
    });

    $('.wp-caption').each(function (index) {
      var child = $(this).find('img');
      var width = $(child[0]).attr('width');
      if(width > 0) {
        $(this).find('.wp-caption-text').css('width', width);
      }
    });

    if($('h2 + img').length) {
      var mainImageOffsetTop = $('h2 + img').offset().top;
      $('.fb-like').css('top', mainImageOffsetTop - 200 + 'px');
    }

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