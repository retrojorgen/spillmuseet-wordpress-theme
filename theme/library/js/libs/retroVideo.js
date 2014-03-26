(function ($) {
	$(function() {
		$.fn.retroVideo = function () {
			var that = this,

				changeVideo = function(event) {
					event.stopPropagation();
					event.preventDefault();

					
					var newVideo = $(event.target).closest('.video-container'),
						currentVideo = $($('.video-container')[0]),
						newVideoHTML = newVideo.clone().html();

					$('.video-container').removeClass('active');
					newVideo.addClass('active');

					// Stick it in there!
					currentVideo.html(newVideoHTML);


					console.log(videoContainer, currentVideo);
				},

				bindEvents = function() {
					$('.video-container').on('click', changeVideo)
				},

				/**
				 * Runs when retroGallery is applied to jQuery selector
				 * @return {void}
				 */
				init = function() {
					bindEvents();
				};


			if($(this).length) {
				init();
				bindEvents();
			}
			return this;
		}
	});
})(jQuery);