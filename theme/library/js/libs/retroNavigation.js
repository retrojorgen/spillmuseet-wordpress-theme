(function ($) {
	$(function() {

		var selectedElement = undefined;

		$('.menu-item-object-category a').on('click', function(event) {
			event.preventDefault();

			var currentElement = $(event.target);
			var urlSections = currentElement.attr('href').split('/');
			var urlSection = urlSections[urlSections.length-2];

			currentElement.addClass('selected');
			if(selectedElement) {
				selectedElement.removeClass('selected');
			}

			getArticles(urlSection, function (data) {
				renderArticles(data);
			});

			addSub(currentElement.parent().children('.sub-menu').clone());

			if(parseInt($('.drop-down-nav').css('top'), 10) > 0 && selectedElement && currentElement.attr('href') == selectedElement.attr('href')) {
				toggleNav(false);
			} else {
				toggleNav(true);
			}

			selectedElement = currentElement;
			
		});

		$('.articles-wrapper').on('click', function() {
			toggleNav(false);
			selectedElement.removeClass('selected');
		});

		var toggleNav = function(toggle) {
			if(toggle) {
				TweenLite.to($('.drop-down-nav'), 0.25, {top:'64px', ease:Power4.easeOut});
				TweenLite.to($('.articles-wrapper'), 0.25, {'padding-top':$('.drop-down-nav').height(), ease:Power4.easeOut});
			} else {
				TweenLite.to($('.drop-down-nav'), 0.25, {top:-$('.drop-down-nav').height() + 40, ease:Power4.easeIn});
				TweenLite.to($('.articles-wrapper'), 0.25, {'padding-top': '0px', delay: 0.25, ease:Power4.easeOut});
			}
		};
		var addSub = function (elements) {
			var subCategories = $('#subcategories');
			subCategories.html('');
			subCategories.append(elements);
		};

		var getArticles = function ( slug, callback ) {
			$.get('http://www.spillmuseet.no/wp_api/v1/posts?orderby=date&per_page=10&category_name=' + slug, function(data) {
				callback(data);
			});
		};

		var renderArticles = function ( data ) {
			var dropDown = $('#articles');
			dropDown.html('');
			data.posts.forEach(function(element) {
				var wrapper = $('<div>').addClass('article-wrapper');
				var container = $('<div>').addClass('article-container');
				var title = $('<h2>').addClass('article-header').text(element.title);
				var imageUrl = _.find(element.media, function(image) {
					return image.id === element.meta.featured_image;
				});
				var image = $('<img>').addClass('article-image').attr('src', imageUrl.sizes[1].url);
				dropDown.append(wrapper.append(container.append(image)).append(title));
			});
		};
	});
})(jQuery);