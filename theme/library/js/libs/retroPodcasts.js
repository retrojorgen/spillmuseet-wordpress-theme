(function ($) {
	$(function() {
			var baseUrl = 'http://192.168.1.8/spillmuseet/';
			var nerdCastUrl = 'getNerdcast.php';
			var retroCastUrl = 'getRetrocast.php';
			var retroItems;
			var nerdItems;
			var items = [];
			var drawItems = function() {
				var container = $('#podcasts-container');
				_.each(items, function(item,key) {
					if(key < 15) {
						var publishedDate = 'Publisert: ' + item.pubDate.getDate() + ' / ' + item.pubDate.getMonth() + ' / ' + item.pubDate.getFullYear();
						var mainContainer = $('<div>').addClass('episode-container');
						var link = $('<a>').attr('href', item.soundCloudUrl).addClass('episode-link').attr('target', '_blank');
						var imageContainer = $('<div>').addClass('image-container');
						var informationContainer = $('<div>').addClass('information-container')
							.append($('<h3>').addClass('episode-title').text(item.title))
							.append($('<h4>').addClass('episode-date').text(publishedDate));
						
						informationContainer.wrap(link);
						imageContainer.append($('<img>').addClass('image').attr('src', item.image.attr('href')).wrap(link));
						link.append(imageContainer);
						link.append(informationContainer);
						$('.loading').hide();
						container.append(mainContainer.append(link));
					}
				});
			};
			var parseItems = function(callback) {
				_.each(retroItems, function(value, index) {
					var object = {};
					var fresh = $(value);
					object.title = fresh.find('title').text();
					object.soundCloudUrl = fresh.find('link').text();
					object.file = fresh.find('enclosure').attr('url');
					object.pubDate = new Date(fresh.find('pubDate').text());
					object.description = fresh.find('description').text();
					object.image = fresh.find('*').filter(function() {
						return this.nodeName === 'itunes:image';
					});
					items.push(object);
				});
				_.each(nerdItems, function(value, index) {
					var object = {};
					var fresh = $(value);
					object.title = fresh.find('title').text();
					object.soundCloudUrl = fresh.find('link').text();
					object.file = fresh.find('enclosure').attr('url');
					object.pubDate = new Date(fresh.find('pubDate').text());
					object.description = fresh.find('description').text();
					object.image = fresh.find('*').filter(function() {
						return this.nodeName === 'itunes:image';
					});
					items.push(object);
				});
				items = _.sortBy(items, function(o) { return o.pubDate; });
				items = items.reverse();
				callback();
			};

			$.get(baseUrl + nerdCastUrl, function(dataN) {
				console.log('yo');
				xmlDoc = $.parseXML(dataN);
				$xml = $(xmlDoc);
				nerdItems = $xml.find('item');
				$.get(baseUrl + retroCastUrl, function(dataR) {
					xmlDoc = $.parseXML(dataR);
					$xml = $(xmlDoc);
					retroItems = $xml.find('item');
					parseItems(function() {
						drawItems();
					});
				});
			});
			$('.episode-details .title').text('Laster nyeste episode..');
	});
})(jQuery);