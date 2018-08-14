<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 *
 * This procceses are beta.
 */

use Inc2734\WP_Page_Speed_Optimization\Page_Speed_Optimization;

new Page_Speed_Optimization();

/**
 * Optimize the Snow Monkey JavaScript loading
 */
add_action( 'after_setup_theme', function() {
	if ( ! get_theme_mod( 'js-loading-optimization' ) ) {
		return;
	}

	add_filter( 'inc2734_wp_page_speed_optimization_defer_scripts', function( $handles ) {
		return array_merge( $handles, [
			snow_monkey_get_main_script_handle(),
		] );
	} );

	add_filter( 'inc2734_wp_page_speed_optimization_async_scripts', function( $handles ) {
		return array_merge( $handles, [
			'inc2734-wp-seo-google-analytics',
		] );
	} );

	add_filter( 'inc2734_wp_page_speed_optimization_builded_scripts', function( $handles ) {
		return array_merge( $handles, [
			'fontawesome5',
			'fontawesome5-v4-shims',
			'comment-reply',
			'wp-embed',
			'jquery.easing',
		] );
	} );
} );

/**
 * Optimize the Snow Monkey JavaScript loading
 */
add_action( 'after_setup_theme', function() {
	if ( ! get_theme_mod( 'jquery-loading-optimization' ) ) {
		return;
	}

	add_filter( 'inc2734_wp_page_speed_optimization_optimize_jquery_loading', '__return_true' );
} );

/**
 * Use HTTP2 Server Push
 */
add_action( 'after_setup_theme', function() {
	if ( ! get_theme_mod( 'http2-server-push' ) ) {
		return;
	}

	add_filter( 'inc2734_wp_page_speed_optimization_do_http2_server_push', '__return_true' );
} );

/**
 * Loads CSS asynchronously
 */
add_action( 'after_setup_theme', function() {
	if ( ! get_theme_mod( 'async-css' ) ) {
		return;
	}

	add_action( 'wp_head', function() {
		?>
		<style>body{visibility:hidden;}.js-bg-parallax{transition: none !important;}</style>
		<?php
	} );

	add_filter( 'inc2734_wp_page_speed_optimization_preload_stylesheets', function( $handles ) {
		$wp_styles = wp_styles();
		$preload_handles = $wp_styles->queue;

		if ( get_theme_mod( 'output-head-style' ) ) {
			$main_handle = snow_monkey_get_main_style_handle();
			if ( in_array( $main_handle, $preload_handles ) ) {
				unset( $preload_handles[ array_search( $main_handle, $preload_handles ) ] );
			}
		}

		return array_merge( $handles, $preload_handles );
	} );
} );

/**
 * Output CSS in head
 */
add_action( 'after_setup_theme', function() {
	if ( ! get_theme_mod( 'output-head-style' ) ) {
		return;
	}

	add_filter( 'inc2734_wp_page_speed_optimization_output_head_styles', function( $handles ) {
		return array_merge( $handles, [
			snow_monkey_get_main_style_handle(),
		] );
	} );
} );

/**
 * Caching nav menus
 */
add_action( 'after_setup_theme', function() {
	if ( ! get_theme_mod( 'cache-nav-menus' ) ) {
		return;
	}

	add_filter( 'inc2734_wp_page_speed_optimization_caching_nav_menus', '__return_true' );
} );

/**
 * Caching widget areas
 */
add_action( 'after_setup_theme', function() {
	if ( ! get_theme_mod( 'cache-sidebars' ) ) {
		return;
	}

	add_filter( 'inc2734_wp_page_speed_optimization_caching_sidebars', '__return_true' );
} );

/**
 * Emoji assets move to footer
 */
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
add_action( 'wp_footer', 'print_emoji_detection_script', 7 );
add_action( 'wp_footer', 'print_emoji_styles' );
