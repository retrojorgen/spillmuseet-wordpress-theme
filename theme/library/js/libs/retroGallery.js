(function ($) {
	$.fn.retroGallery = function () {
		var that = this,
			fullImageContainer,
			closeButton;

			init = function() {
				$('.gallery-item img').attr('height', '').attr('width', '');
				$($('.gallery-item')[0]).addClass('selected');
				$('.gallery br').remove();
				fullImageContainer = $('<div>').addClass('full-image');
				closeButton = $('<button>').addClass('close-gallery-button').on('click', closeGallery);

				$(that).append(fullImageContainer).append(closeButton);
				setFullImage($.clone($('.gallery-item')[0]));
			},

			setFullImage = function(element) {

				var element = $(element),
					imageString = $(element).find('img').attr('src').replace('-304x160', '');

				element.find('img').attr('src', imageString);

				fullImageContainer
					.empty()
					.append(element);
			},

			changeFullImage = function(event) {
				event.preventDefault();
				event.stopPropagation();

				var targetImage = $(event.target).closest('.gallery-item');

				checkIfFullscreen();

				$('.gallery-item').removeClass('selected');
				targetImage.addClass('selected');

				setFullImage($.clone(targetImage[0]));
			},

			closeGallery = function(event) {
				if(event) {
					event.preventDefault();
					event.stopPropagation();
				}
					$(that).removeClass('fullscreen');
					$('.fullscreen-overlay').removeClass('active');
			}

			bindEvents = function() {
				$(that).children('.gallery-item')
					.on('click', changeFullImage);

				$('.close-gallery-button').on('click', closeGallery);
				console.log('hoisss');
				$(window).on('keydown', function(event) {
					console.log('hoi');
					if(event.keyCode === 27) {
						closeGallery();
					}
				});
			},

			checkIfFullscreen = function() {
				if(!$(that).hasClass('fullscreen')) {
					$(that).addClass('fullscreen');
				}
				if(!$('.fullscreen-overlay').hasClass('active')) {
					$('.fullscreen-overlay').addClass('active');
				}
			};


		if($(this).length) {
			init();
			bindEvents();
		}
		return this;
	}
})(jQuery);