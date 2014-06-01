<?php get_header(); ?>
<?php $mediumImageNumbers = array(5,6,8,9,10,11,13,14,15,18,19,20);
?>
<section class="articles">
		<ul class="articles-list" role="main">
			<?php 
			if (have_posts()) {
				$counter = 1;
				while (have_posts()) { 
					the_post(); ?><li>
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
							<h2><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h1>
						<?php // comments_template(); // uncomment if you want to use them ?>
				</li><?php 
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
		<?php get_sidebar(); ?>
		<?php get_footer(); ?>