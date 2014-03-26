				<div id="sidebar" class="sidebar fourcol last clearfix" role="complementary">
			
					<div class="sidebar-section">
						<h3 class="sidebar-title" style="font-size: 20px">Vil du skrive for Spillmuseet?</h3>
						<p class="sidebar-paragraph" style="font-size: 16px">Spillmuseet søker deg som har lyst til å bli med å lage det beste magasinet for spillkultur i Norge!</p>
						<p class="sidebar-paragraph" style="font-size: 16px">Høres det ut som noe for deg? <br><a href="http://www.spillmuseet.no/vil-du-skrive-for-spillmuseet/">Les mer her</a></p>
					</div>

					<div class="sidebar-section">
						<h3 class="sidebar-title">Følg oss på facebook</h3>
						<p class="sidebar-paragraph">På facebook kan du holde deg oppdatert på alt som skjer med Spillmuseet og Retrospillmessen 2014 i mai!</p>
						<div class="fb-like" data-href="https://www.facebook.com/Spillmuseet" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>			
					</div>
					<div class="sidebar-section">
						<h3 class="sidebar-title">Hjelp oss til Spillexpo 2014!</h3>
						<p class="sidebar-paragraph">Spillmuseet er en frivillig non-profit organisasjon som jobber for å bevare Norsk spillkultur!<br><br>
						Vi ønsker å vise frem museet vårt på Spillexpo 2014, men da trenger vi hjelp fra alle dere. Vi setter utrolig pris på alle små og store bidrag.<br>
						<a href="http://www.spillmuseet.no/hvem-er-vi/">Les mer om Spillmuseet her.</a></p>


						<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
						<input type="hidden" name="cmd" value="_s-xclick">
						<input type="hidden" name="hosted_button_id" value="CK4F2XL6YKJCA">
						<input type="image" src="https://www.paypalobjects.com/no_NO/NO/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal – den trygge og enkle metoden for å betale på nettet.">
						</form>
					</div>
				
					<div class="sidebar-section">
						<h3 class="sidebar-title">Mest populære saker denne uka</h3>
							<?php
							$args=array(
							  'orderby' => 'comment_count',
							  'order' => 'DESC',
							  'post_type' => 'post',
							  'post_status' => 'publish',
							  'posts_per_page' => 10, // how much post you want to display
							  'ignore_sticky_posts'=> 1,
							  'year' => date('Y'),
							  'w' => date('W')
							);

							$my_query = null;
							$my_query = new WP_Query($args);
							if( $my_query->have_posts() ) { ?>
							    <?php while ($my_query->have_posts()) : $my_query->the_post(); ?>
							    	<div class="top-comment-post">
								    	<div class="comment-image">
							    			<?php echo get_the_post_thumbnail( $post_id, 'thumbnail', $attr ); ?>
							    			<?php comments_number( '$', '$', '%' ); ?>
						    			</div>
								    	<a class="comment-title" href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a>
									  		
									</div>
							    <?php  endwhile; ?>
							<?php }

							wp_reset_query(); ?>
					</div>
				</div>


				