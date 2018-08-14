<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 */

use Inc2734\WP_Customizer_Framework\Customizer_Framework;

$customizer = Customizer_Framework::init();

$customizer->control( 'checkbox', 'mwt-display-contents-outline', [
	'label'    => __( 'Display contents outline in posts', 'snow-monkey' ),
	'priority' => 110,
	'type'     => 'option',
	'default'  => true,
] );

if ( ! is_customize_preview() ) {
	return;
}

$panel   = $customizer->get_panel( 'design' );
$section = $customizer->get_section( 'post' );
$control = $customizer->get_control( 'mwt-display-contents-outline' );
$control->join( $section )->join( $panel );
$control->partial( [
	'selector' => '.c-entry__content .wpco',
] );
