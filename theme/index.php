<?php get_header(); ?>
<?php $mediumImageNumbers = array(5,6,8,9,10,11,13,14,15,18,19,20);
?>
<section class="articles">
		<ul class="articles-list" role="main" id="main">
		<div class="view-header-container"><h1 class="view-header">Nyeste artikler</h1></div>
			<?php 
			if (have_posts()) {
				$counter = 1;
				while (have_posts()) { 
					the_post();
					$categories = get_the_category( $post_id ); 
					$mainCategory = $categories[count($categories)-1];
					?><li id="article-<?php echo $counter; ?>" class="article-snippet">
							<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
								<div class="main-image-container">
						 			<?php 
						 					if(in_array($counter, $mediumImageNumbers)) {
						 						echo get_the_post_thumbnail( $post_id, 'medium', $attr );
						 					} else {
						 						echo get_the_post_thumbnail( $post_id, 'large', $attr );
						 					}
						 					?>
								</div>
							</a>
							<div class="article-snippet-header-container">
								<div class="article-category-container">
									<div class="article-category">
										<?php print($mainCategory->cat_name); ?>
									</div>
								</div>
								<h2 class="article-snippet-header"><a href="<?php the_permalink() ?>" class="article-snippet-header-link" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
							</div>

						<?php // comments_template(); // uncomment if you want to use them ?>
				</li><?php 
					if($counter == 3) { ?>
						<li id="article-ad"><a href="http://www.kaptenkrok.se/retron5-retro-gaming-konsoll-spiller-av-nes-snes-mega-drive-game-boy-gameboy-advance-famicom-mange-flere-spillkassetter-white-gray-releasefest-norge-pakke" target="_blank"><img src="http://www.spillmuseet.no/wp-content/themes/spillmuseet/library/img/kaptenkrok-ad-2.jpg"></a></li>
					<?php }
					$counter++;
				} 
			}?>
		</ul>





									<?php if ( function_exists( 'bones_page_navi' ) ) { ?>
											<?php bones_page_navi(); ?>
									<?php } else { ?>
											<nav class="wp-prev-next">
													<ul class="clearfix">
														<li class="prev-link"><?php next_posts_link( __( '&laquo; Older Entries', 'bonestheme' )) ?></li>
														<li class="next-link"><?php previous_posts_link( __( 'Newer Entries &raquo;', 'bonestheme' )) ?></li>
													</ul>
											</nav>
									<?php } ?>


	</section>
	<section class="podcasts">

	<div class="view-header-container">
		<h1 class="view-header">Nyeste podcaster</h1>
		<div class="loading"></div>
	</div>
	</section>
		<?php get_sidebar(); ?>
		<?php get_footer(); ?>