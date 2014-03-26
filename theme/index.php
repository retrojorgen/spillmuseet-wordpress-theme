<?php get_header(); ?>
		<ul class="articles-list" role="main">
			<?php 
			if (have_posts()) {
				$counter = 1;
				while (have_posts() && $counter <= 5) { 
					the_post(); ?><li class="article-container">
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
							<?php the_excerpt(); ?><p><a href="<?php the_permalink() ?>">Les mer..</a></p>
						</section>

						<?php // comments_template(); // uncomment if you want to use them ?>

					</article>
				</li><?php 
					$counter++;
				} 
			}

			?></ul>
			<?php wp_reset_query(); ?>
			<?php wp_reset_postdata(); ?>

			<?php
				$myposts = new WP_Query(
					array(
					    'post_type'=> 'post',
					    'post_status' => 'publish',
					    'order' => 'DESC',
					    'posts_per_page' => 4,
					    'tax_query' => array(
					        array(
					            'taxonomy' => 'post_format',
					            'field' => 'slug',
					            'terms' => array( 'post-format-video' )
					        )
					    )
					)
				);
				if ( $myposts->have_posts() ) {
				?>
<div class="videos-wrapper" id="videos-wrapper">
	<h2 class="videos-title">Nyeste videoer fra <span class="spillmuseet-text">Spillmuseet</span></h2>
	<div class="videos-container">
	<?php
		$videoCounter = 1;
	?>
	<?php while ( $myposts->have_posts() ) : $myposts->the_post(); ?>

		 <div class="video-container">
		 	<div class="video">
		 		<?php the_content(); ?>
		 	</div>
		 	<div class="video-image">
		 		<?php echo get_the_post_thumbnail( $post_id, 'medium', $attr ); ?>
		 	</div>
		 	<div class="video-title">
			 	<h2><?php the_title(); ?></h2>
		 	</div>
		 </div>
		 <?php if ($videoCounter == 1) { ?>
			  <div class="video-container active">
			 	<div class="video">
			 		<?php the_content(); ?>
			 	</div>
			 	<div class="video-image">
			 		<?php echo get_the_post_thumbnail( $post_id, 'medium', $attr ); ?>
			 	</div>
			 	<div class="video-title">
				 	<h2><?php the_title(); ?></h2>
			 	</div>
			 </div>
		 <?php } ?>
	<?php $videoCounter++; endwhile; ?>
	</div>
</div>
<?php } ?>
<?php wp_reset_postdata(); ?>
<?php wp_reset_query(); ?>

			<ul class="articles-list" role="main">			
			<?php 
			if (have_posts()) { 
				while (have_posts()) { 
					the_post(); ?><li class="article-container">
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
				</li><?php 
				} 
			} 
			?>
			
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