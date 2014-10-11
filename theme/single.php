<?php get_header(); ?>
	<?php
		$previous_post = get_previous_post();
		$next_post = get_next_post();
	?>
	<div class="next-previous-posts">
	<?php
		if(isset($next_post) && $next_post != '') {
			?>
			<div class="next-post-container">
				<a href="<?php echo get_permalink($next_post->ID) ?>">
				<?php echo get_the_post_thumbnail( $next_post->ID, 'thumbnail', $attr ); ?>
				<div class="header-container">
					<div class="next-post-label">Neste artikkel</div>
					<h1><?php echo $next_post->post_title ?></h1>
					<div class="post-time"><?php echo get_post_time( 'Y-m-j', $next_post->ID ) ?></div>
				</div>
				</a>
			</div>
			<?php
		}
	?>
	<?php
		if(isset($previous_post)) {
			?>
			<div class="previous-post-container">
			<a href="<?php echo get_permalink($previous_post->ID) ?>">
				<?php echo get_the_post_thumbnail( $previous_post->ID, 'thumbnail', $attr ); ?>
				<div class="header-container">
					<div class="next-post-label">Forrige artikkel</div>
					<h1><?php echo $previous_post->post_title ?></h1>
					<div class="post-time"><?php echo get_post_time( 'Y-m-j', $previous_post->ID ) ?></div>
				</div>
				</a>
			</div>
			<?php
		}
	?>
	</div>
					<section class="podcasts">
						<div class="view-header-container">
							<h1 class="view-header">Nyeste podcaster</h1>
							<div class="loading">Laster podcaster</div>
							<div id="podcasts-wrapper" class="podcasts-wrapper">
								<div id="podcasts-container" class="podcasts-container"></div>
							</div>
						</div>
					</section>
					<section class="articles">
					<div class="article fb-like" data-href="<?php the_permalink() ?>" data-layout="box_count" data-action="like" data-show-faces="true" data-share="true"></div>
					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>


						<article id="post-<?php the_ID(); ?>" <?php post_class('main-article'); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

							<header class="article-header">

								<h1 class="entry-title single-title" itemprop="headline"><?php the_title(); ?></h1>
								<p class="byline vcard">
								<?php echo get_avatar( get_the_author_meta( 'ID' ), 60 ); ?>
								<span class="author"><?php echo bones_get_the_author_posts_link() ?></span><br>
								<span class="date"><?php echo get_the_time( 'Y-m-j' ) ?></span><br>
								<span class="author-bio"><?php the_author_description(); ?></span>
								</p>


							</header>

							<section class="entry-content clearfix" itemprop="articleBody">
							
								<?php the_content(); ?>
							</section>

							<footer class="article-footer">
								<?php the_tags( '<p class="tags"><span class="tags-title">' . __( 'Tags:', 'bonestheme' ) . '</span> ', ', ', '</p>' ); ?>

							</footer>

							<?php comments_template(); ?>

						</article>
					<?php endwhile; ?>

					<?php else : ?>

						<article id="post-not-found" class="hentry clearfix">
								<header class="article-header">
									<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
								</header>
								<section class="entry-content">
									<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
								</section>
								<footer class="article-footer">
										<p><?php _e( 'This is the error message in the single.php template.', 'bonestheme' ); ?></p>
								</footer>
						</article>

					<?php endif; ?>
					</section>
					<?php get_sidebar(); ?>
					<?php get_footer(); ?>


