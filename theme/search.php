<?php get_header(); ?>
<section class="articles">
						<h1 class="archive-title"><span><?php _e( 'Søkeresultater for:', 'bonestheme' ); ?></span> <?php echo esc_attr(get_search_query()); ?></h1>
			<ul class="articles-list search-list" role="main">

						<?php if (have_posts()) : while (have_posts()) : the_post(); ?><li class="article-container">
							<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
								<div class="main-image-container">
						 			<?php echo get_the_post_thumbnail( $post_id, 'medium', $attr ); ?>
								</div>
							</a>

							<h2><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
				</li><?php endwhile; ?>

								<?php if (function_exists('bones_page_navi')) { ?>
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
											<h1><?php _e( 'Beklager.. ingen resultater.', 'bonestheme' ); ?></h1>
										</header>
										<section class="entry-content">
											<p><?php _e( 'Prøv å søke igjen.', 'bonestheme' ); ?></p>
										</section>
										<footer class="article-footer">
												<p><?php _e( '', 'bonestheme' ); ?></p>
										</footer>
									</article>

							<?php endif; ?>

			</ul>
		</section>
		<?php get_sidebar(); ?>
		<?php get_footer(); ?>
	</div>


