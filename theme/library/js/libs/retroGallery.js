(function ($) {
	$(function() {
		$.fn.retroGallery = function () {
			var that = this,
				closeButton,
				leftButton,
				rightButton,
				openButton,
				imageCounter,
				currentImageNumber,
				imageCount,
				imageAttributesArray = [],
				openGalleryText = 'Åpne galleri',

				/**
				 * Attempts to remove image resolution from image source.
				 * Store the resolution on a paralell array imageAttributesArray.
				 * Calls a reset of image size in previous fullsize image.
				 * 
				 * @param {integer} imagePosition
				 * @return {void}
				 */
				setFullImage = function(imagePosition) {

					var imageContainerNode = $(that).find('.gallery-item')[imagePosition],
						imageNode = $(imageContainerNode).find('img'),
						imageTemp = imageNode.attr('src'),
						imageExtension = imageTemp.substring(imageTemp.length-4, imageTemp.length);
						imageTemp = imageTemp.substring(0, imageTemp.length-4);

						imageAttributes = {
							'pre': imageTemp.substring(0, imageTemp.length-8),
							'res': imageTemp.substring(imageTemp.length-8, imageTemp.length),
							'ext': imageExtension
						};

						console.log(imageExtension, imageTemp, imageAttributes);

					imageAttributesArray[imagePosition] = imageAttributes;

					console.log('outside',currentImageNumber, imagePosition);

					if(currentImageNumber != undefined) {
						console.log(currentImageNumber, imagePosition);
						resetImage(currentImageNumber);
					}



					$(that).find('.gallery-item').removeClass('selected');
					$(imageContainerNode).addClass('selected').find('img').attr('src', 
						imageAttributes.pre + imageAttributes.ext);

					currentImageNumber = imagePosition;
				},

				/**
				 * Attempts to reset image resolution of an image in a gallery.
				 * Assumes that there is an image attribute stored for image in imageAttributesArray.
				 * @param  {integer} imagePosition
				 * @return {void}
				 */
				resetImage = function(imagePosition) {
					var imageAttributes = imageAttributesArray[imagePosition];
					$($(that).find('.gallery-item')[imagePosition]).find('img').attr('src',
						imageAttributes.pre + imageAttributes.res + imageAttributes.ext);
				},

				/**
				 * Checks if we are within the boundaries of the image gallery.
				 * Returns true or false.
				 * @param  {integer} imageNumber
				 * @return {boolean}
				 */
				checkImage = function(imageNumber) {
					if(imageNumber <= imageCount && imageNumber > -1) {
						return true;
					} else {
						return false;
					}
				},

				/**
				 * Attempts to set an image to fullscreen if image is within boundaries of gallery.
				 * @param  {integer} imageNumber
				 * @return {void}
				 */
				changeImage = function(imageNumber) {
					if(checkImage(imageNumber)) {
						setFullImage(imageNumber);
						setCounter(imageNumber);
					}				
				},

				/**
				 * Attempts to close gallery.
				 * @param  {event} event
				 * @return {void}
				 */
				closeGallery = function(event) {

					if(event) {
						event.preventDefault();
						event.stopPropagation();
					}

					$('body').css({
						'height': '100%',
						'overflow': 'visible'
					});

					$(that).removeClass('fullscreen');
					openButton.show();
				},


				/**
				 * Attempts to open the gallery in full screen.
				 * @param  {event} event
				 * @return {void}
				 */
				openGallery = function(event) {
					console.log($(that));

					$(that).addClass('fullscreen');

					$('body').css({
						'height': '100%',
						'overflow': 'hidden'
					});

					openButton.hide();
				},

				/**
				 * Attempts to bind a few events required for the gallery to work.
				 * @return {void}
				 */
				bindEvents = function() {

					$('.close-gallery-button').on('click', closeGallery);

					$(window).on('keydown', function(event) {
						if(event.keyCode === 27) {
							closeGallery();
						}
						if(event.keyCode === 37) {
							changeImage(currentImageNumber-1);
						}
						if(event.keyCode === 39) {
							changeImage(currentImageNumber+1);
						}
					});
				},


				/**
				 * Create the controller buttons required by the gallery.
				 * @return {void}
				 */
				addControllers = function() {

					closeButton = $('<button>').addClass('close-gallery-button').on('click', closeGallery);
					openButton = $('<button>').addClass('open-gallery-button').on('click', openGallery);
					openButton.append($('<span></span>').addClass('label').text(openGalleryText));

					rightButton = $('<button>').addClass('right-gallery-image-button').on('click', function() {
						changeImage(currentImageNumber+1);
					});

					leftButton = $('<button>').addClass('left-gallery-image-button').on('click', function() {
						changeImage(currentImageNumber-1);
					});

					imageCounter = $('<div>').addClass('gallery-image-counter');

					$(that).append(closeButton).append(rightButton).append(leftButton).append(openButton).append(imageCounter);
				},

				/**
				 * Sets the number of the image and total number of images, displayed in a container.
				 * @param {integer} imageNumber
				 * @return {void}
				 */
				setCounter = function(imageNumber) {
					imageCounter.text((imageNumber+1) + '/' + (imageCount+1));
				},

				/**
				 * Runs when retroGallery is applied to jQuery selector
				 * @return {void}
				 */
				init = function() {
					// remove image and height attributes from images in gallery
					$(that).find('.gallery-item img').attr('height', '').attr('width', '');

					// remove silly line breaks that wordpress adds by default.
					$(that).find('br').remove();

					// Store number of images in gallery
					imageCount = $(that).find('.gallery-item').length - 1;

					// Add control buttons
					addControllers();

					// Choose first image as fullscreenimage
					setFullImage(0);

					setCounter(0);
				};


			if($(this).length) {
				init();
				bindEvents();
			}
			return this;
		}
	});
})(jQuery);