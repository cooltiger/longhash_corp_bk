(function ($) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Inc2734_WP_Pure_CSS_Gallery = function () {
    function Inc2734_WP_Pure_CSS_Gallery() {
      var _this = this;

      classCallCheck(this, Inc2734_WP_Pure_CSS_Gallery);

      $(function () {
        _this.images = $('a:not([class]) > img[class*="wp-image-"]');
        _this.generateLightbox();
      });
    }

    createClass(Inc2734_WP_Pure_CSS_Gallery, [{
      key: 'generateLightbox',
      value: function generateLightbox() {
        this.images.each(function (i, e) {
          var image = $(e);
          var anchor = image.parent();
          var href = anchor.attr('href');

          var remoteImg = new Image();
          var remoteImgWidth = 0;
          var remoteImgHeight = 0;

          remoteImg.onload = function () {
            remoteImgWidth = remoteImg.width;
            remoteImgHeight = remoteImg.height;

            if (!remoteImgWidth || !remoteImgHeight) {
              return true;
            }

            var id = 'wp-pure-css-gallery-lightbox-id-' + i;
            anchor.attr('href', '#' + id);

            var overlay = $('<div class="wp-pure-css-gallery-lightbox" id="' + id + '" />').append($('<a class="wp-pure-css-gallery-lightbox__close-btn" href="#_">&times</a>')).append($('<a class="wp-pure-css-gallery-lightbox__image-wrapper" href="#_" />').append($('<div class="wp-pure-css-gallery-lightbox__image" />').css({
              backgroundImage: 'url(' + href + ')',
              height: remoteImgHeight,
              width: remoteImgWidth
            })));

            anchor.after(overlay);
          };

          remoteImg.src = href;
        });
      }
    }]);
    return Inc2734_WP_Pure_CSS_Gallery;
  }();

  new Inc2734_WP_Pure_CSS_Gallery();

}(jQuery));
