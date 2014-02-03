(function ($) {
	$.fn.retroGallery = function () {
		var that = this,
			fullImageContainer,
			closeButton,
			leftButton,
			rightButton,
			currentItem,
			clickStart = false;

			init = function() {
				$('.gallery-item img').attr('height', '').attr('width', '');
				$($('.gallery-item')[0]).addClass('selected');
				$('.gallery br').remove();
				fullImageContainer = $('<div>').addClass('full-image');
				closeButton = $('<button>').addClass('close-gallery-button').on('click', closeGallery);
				rightButton = $('<button>').addClass('right-gallery-image-button').on('click', getRightImage);
				leftButton = $('<button>').addClass('left-gallery-image-button').on('click', getLeftImage);

				$(that).append(fullImageContainer).append(closeButton).append(rightButton).append(leftButton);
				currentItem = $($('.gallery-item')[0]);
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

			getRightImage = function() {

				var nextItem = currentItem.next('.gallery-item');
				if(nextItem) {
					if(nextItem.hasClass('gallery-item')) {
						changeFullImage(nextItem);
					}
				} else {
				}

			},

			getLeftImage = function() {

				var prevItem = currentItem.prev('.gallery-item');
				if(prevItem) {
						if(prevItem.hasClass('gallery-item')) {
							changeFullImage(prevItem);
						}
				} else {
				}

			},

			imageCLickController = function(event) {
				event.preventDefault();
				event.stopPropagation();

				clickStart = true;

				var target = $(event.target).closest('.gallery-item');

				changeFullImage(target);
			},

			changeFullImage = function(galleryItem) {

				currentItem = galleryItem;
				
				checkIfFullscreen();

				$('.gallery-item').removeClass('selected');
				galleryItem.addClass('selected');

				setFullImage($.clone(galleryItem[0]));
			},

			closeGallery = function(event) {
				if(event) {
					event.preventDefault();
					event.stopPropagation();
				}

				$(that).removeClass('fullscreen');
				$('.fullscreen-overlay').removeClass('active');
				clickStart = false;
			}

			bindEvents = function() {
				$(that).children('.gallery-item')
					.on('click', imageCLickController);

				$('.close-gallery-button').on('click', closeGallery);
				console.log('hoisss');
				$(window).on('keydown', function(event) {
					if(clickStart) {
						if(event.keyCode === 27) {
							closeGallery();
						}
						if(event.keyCode === 37) {
							getLeftImage();
						}
						if(event.keyCode === 39) {
							getRightImage();
						}
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