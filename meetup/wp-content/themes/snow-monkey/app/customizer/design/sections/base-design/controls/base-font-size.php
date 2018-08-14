<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 */

use Inc2734\WP_Customizer_Framework\Customizer_Framework;

$customizer = Customizer_Framework::init();

$customizer->control( 'number', 'base-font-size', [
	'label'    => __( 'Base font size(px)', 'snow-monkey' ),
	'default'  => 16,
	'priority' => 110,
] );

if ( ! is_customize_preview() ) {
	return;
}

$panel   = $customizer->get_panel( 'design' );
$section = $customizer->get_section( 'base-design' );
$control = $customizer->get_control( 'base-font-size' );
$control->join( $section )->join( $panel );
