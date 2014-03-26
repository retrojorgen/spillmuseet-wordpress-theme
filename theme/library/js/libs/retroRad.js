(function ($) {
	$(function() {
		$.fn.retroRad = function () {
				var that = this,
					player,
					windowPlayer,
					playerData,

				createPlayer = function() {
					$('.episode-details .title').text(playerData.title);
					var newDate = new Date(playerData.pubDate);
					$('.episode-details .date').text(newDate.getDate() + "." + newDate.getMonth() + "." + newDate.getFullYear());
				},

				openPlayer = function(event) {
					var windowPlayer = window.open('/radRadio.php','','width=460,height=300');

						windowPlayer.focus();
						console.log($(windowPlayer.document).find('body').children());

						windowPlayer.onload = function () {
						  $(windowPlayer.document).find('#player').attr('src', playerData.file);
						  $(windowPlayer.document).find('.title').text(playerData.title);
						  $(windowPlayer.document).find('.description').text(playerData.description);
						  $(windowPlayer.document).find('.download').attr('href', playerData.file);
						};
				},

				fixSillyStrings = function (sillyString) {
					sillyString = sillyString.replace('&#8211;', '-');
					sillyString = sillyString.replace('[&#038;', '& ');
					sillyString = sillyString.replace('&#038;', '&');
					return sillyString;
				},

				bindEvents = function() {
					$('#rad-radio').on('click', openPlayer);
				},

				/**
				 * Runs when retroGallery is applied to jQuery selector
				 * @return {void}
				 */
				init = function() {

					bindEvents();
					$('.episode-details .title').text('Laster nyeste episode..');

				    audiojs.events.ready(function() {

						$.get('/getRad.php',function(data) {
							xmlDoc = $.parseXML(data);
							$xml = $(xmlDoc);
							$items = $xml.find('item');
							$mostRecentCast = $($items[0]);
							$title = $mostRecentCast.find('title').text();
							$file = $mostRecentCast.find('enclosure').attr('url');
							$pubDate = $mostRecentCast.find('pubDate').text();
							$description = $mostRecentCast.find('description').text();
							playerData = {
								'title': $title,
								'file': $file,
								'pubDate': $pubDate,
								'description': fixSillyStrings($description)
							};
							createPlayer();
						});

				    });
				};


			if($(this).length) {
				init();
			}
			return this;
		}
	});
})(jQuery);