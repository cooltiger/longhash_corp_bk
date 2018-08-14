'use strict';

import $ from 'jquery';
import './_wpaw-pickup-slider.js';

$(() => {
  const api = wp.customize;

  api.selectiveRefresh.bind('partial-content-rendered', (partial) => {
    if (partial.container) {

      // Showcase widget
      if (partial.container.find('.wpaw-showcase').length) {
        partial.container.find('.wpaw-showcase').backgroundParallaxScroll();
      }

      // Pickup slider widget
      if (partial.container.find('.wpaw-pickup-slider__canvas').length) {
        partial.container.find('.wpaw-pickup-slider__canvas').SnowMonkeyWpawPickupSlider();
      }

      // Slider widget
      if (partial.container.find('.wpaw-slider__canvas').length) {
        partial.container.find('.wpaw-slider__canvas').WpawSlider();
      }

      // Contents outline widget
      if (partial.container.find('.wpco-wrapper').length) {
        partial.container.find('.wpco-wrapper').wpContentsOutline();
      }
    }
  });
});
