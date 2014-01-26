(function ($) {
	$.fn.retroGallery = function () {
		var that = this;
		var fullImageContainer,

			init = function() {
				$('.gallery-item img').attr('height', '').attr('width', '');
				$($('.gallery-item')[0]).addClass('selected');
				$('.gallery br').remove();
				fullImageContainer = $('<div>').addClass('full-image');
				$(that).append(fullImageContainer);
				setFullImage($.clone($('.gallery-item')[0]));
			},

			setFullImage = function(element) {

				var element = $(element),
					imageString = $(element).find('img').attr('src').replace('-150x150', '');
				
				element.find('img').attr('src', imageString);

				fullImageContainer
					.empty()
					.append(element);
			},

			changeFullImage = function(event) {
				event.preventDefault();
				event.stopPropagation();

				var targetImage = $(event.target).closest('.gallery-item');

				$('.gallery-item').removeClass('selected');
				targetImage.addClass('selected');

				setFullImage($.clone(targetImage[0]));
			},

			bindEvents = function() {
				$(that).children('.gallery-item')
					.on('click', changeFullImage);
			}


		if($(this).length) {
			init();
			bindEvents();
		}
		return this;
	}
})(jQuery);