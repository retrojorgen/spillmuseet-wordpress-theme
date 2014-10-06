<?php get_header(); ?>
<section class="articles">

							<?php if (is_category()) { ?>

							<?php } elseif (is_tag()) { ?>
								<h1 class="archive-title h2">
									<span><?php _e( '', 'bonestheme' ); ?></span> <?php single_tag_title(); ?>
								</h1>

							<?php } elseif (is_author()) {
								global $post;
								$author_id = $post->post_author;
							?>
								<h1 class="archive-title h2">

									<span><?php _e( '', 'bonestheme' ); ?></span> <?php the_author_meta('display_name', $author_id); ?>

								</h1>
							<?php } elseif (is_day()) { ?>
								<h1 class="archive-title h2">
									<span><?php _e( '', 'bonestheme' ); ?></span> <?php the_time('l, F j, Y'); ?>
								</h1>

							<?php } elseif (is_month()) { ?>
									<h1 class="archive-title h2">
										<span><?php _e( '', 'bonestheme' ); ?></span> <?php the_time('F Y'); ?>
									</h1>

							<?php } elseif (is_year()) { ?>
									<h1 class="archive-title h2">
										<span><?php _e( '', 'bonestheme' ); ?></span> <?php the_time('Y'); ?>
									</h1>
							<?php } ?>

							<ul class="articles-list category-view" role="main">
							<?php 
								$firstPost = 'first-post';
								$counter = 0;
								$mediumImageNumbers = array(5,6,8,9,10,11,13,14,15,18,19,20);
							?>
							<?php if (have_posts()) : while (have_posts()) : the_post(); ?><li id="<?php echo $firstPost; ?>" class="article-container list-column-<?php echo $counter; ?>">
											<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
												<div class="main-image-container">
										 			<?php 
										 					$firstPost = '';
										 					if($counter == 1) {
										 						$counter = 2;
										 					} else {
										 						$counter = 1;
										 					}
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
								</li><?php endwhile; ?>
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

							<?php else : ?>

									<article id="post-not-found" class="hentry clearfix">
										<header class="article-header">
											<h1>Ikke noe innhold her ennå. beklager.</h1>
										</header>
										<section class="entry-content">
										</section>
										<footer class="article-footer">
										</footer>
									</article>

							<?php endif; ?>
					<?php get_sidebar(); ?>
</section>
<?php get_footer(); ?>
