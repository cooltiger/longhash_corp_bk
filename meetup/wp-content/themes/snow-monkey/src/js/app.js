'use strict';

import $ from 'jquery';

import '../../assets/packages/slick-carousel';
import '../../vendor/inc2734/wp-basis/src/assets/packages/sass-basis/src/js/basis.js';
import '../../assets/packages/jquery.sticky';
import '../../assets/packages/jquery.background-parallax-scroll';
import '../../vendor/inc2734/wp-contents-outline/src/assets/packages/jquery.contents-outline/src/jquery.contents-outline.js';
import '../../vendor/inc2734/wp-awesome-widgets/src/assets/js/wp-awesome-widgets.js';
import '../../vendor/inc2734/wp-contents-outline/src/assets/js/wp-contents-outline.js';
import './_wpaw-pickup-slider.js';
import './_wpaw-pr-box.js';

import BasisStickyHeader from '../../vendor/inc2734/wp-basis/src/assets/packages/sass-basis-layout/src/js/sticky-header.js';
new BasisStickyHeader();

import Inc2734_WP_Share_Buttons from '../../vendor/inc2734/wp-share-buttons/src/assets/js/wp-share-buttons.js';
new Inc2734_WP_Share_Buttons();

import FixAdminBar from './_fix-adminbar.js';
new FixAdminBar();

import SnowMonkeyWidgetItemExpander from './_widget-item-expander.js';
new SnowMonkeyWidgetItemExpander();

import SnowMonkeyHeader from './_header.js';
if (snow_monkey_header_position_only_mobile) {
  new SnowMonkeyHeader();
}

import SnowMonkeyDropNav from './_drop-nav.js';
new SnowMonkeyDropNav();

import SnowMonkeyPageTopScroll from './_page-top-scroll.js';
new SnowMonkeyPageTopScroll();

import SnowMonkeyFooterStickyNav from './_footer-sticky-nav.js';
new SnowMonkeyFooterStickyNav();

$('.l-sidebar-sticky-widget-area').sticky({
  breakpoint: 1024,
  offset  : (() => {
    if ('sticky' === $('.l-header').attr('data-l-header-type')) {
      return $('.l-header').outerHeight() + parseInt($('html').css('margin-top'));
    }
    return $('.l-header__drop-nav .p-global-nav').outerHeight() + parseInt($('html').css('margin-top'));
  })()
});

$('.js-bg-parallax').backgroundParallaxScroll();

$('.wpaw-pickup-slider__canvas').SnowMonkeyWpawPickupSlider();
$('.wpaw-slider__canvas').WpawSlider();
$('.wpaw-pr-box').SnowMonkeyWpawPrBox();

$('.wpco-wrapper').wpContentsOutline();

$(window).on('elementor/frontend/init', () => {
  elementorFrontend.hooks.addAction('frontend/element_ready/widget', (scope) => {
    if (scope.hasClass('elementor-widget-wp-widget-inc2734_wp_awesome_widgets_slider')) {
      scope.find('.wpaw-slider__canvas').WpawSlider();
    } else if (scope.hasClass('elementor-widget-wp-widget-inc2734_wp_awesome_widgets_pickup_slider')) {
      scope.find('.wpaw-pickup-slider__canvas').SnowMonkeyWpawPickupSlider();
    } else if (scope.hasClass('elementor-widget-wp-widget-inc2734_wp_awesome_widgets_showcase')) {
      scope.find('.wpaw-showcase').backgroundParallaxScroll();
    }
  });
});
