<?php get_header(); ?>

		<ul class="articles-list" role="main">
			<?php if (have_posts()) : while (have_posts()) : the_post(); ?><li class="article-container">
					<article id="post-<?php the_ID(); ?>" <?php post_class( 'article' ); ?> role="article">
			            <div class="category"><?php echo get_the_category_list($post_id, ', '); ?></div>
						<header class="article-header">
							<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
								<div class="main-image-container">
						 			<?php echo get_the_post_thumbnail( $post_id, 'medium', $attr ); ?> 
								</div>
							</a>

							<h1 class="h2"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h1>

						</header>

						<section class="entry-content clearfix">
							<?php the_excerpt(); ?><p><a href="<?php the_permalink() ?>">Les mer..</a>
						</section>

						<?php // comments_template(); // uncomment if you want to use them ?>

					</article>
				</li><?php endwhile; ?>
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
							<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
					</header>
						<section class="entry-content">
							<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
					</section>
					<footer class="article-footer">
							<p><?php _e( 'This is the error message in the index.php template.', 'bonestheme' ); ?></p>
					</footer>
				</article>
			<?php endif; ?>
			
		</ul>
			<?php get_footer(); ?>
				<?php //get_sidebar(); ?>
				
	</div>
</div>


