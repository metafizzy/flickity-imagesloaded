/*!
 * Flickity imagesLoaded v0.1.1
 * enables imagesLoaded option for Flickity
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false, require: false */
  'use strict';
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'flickity/js/index',
      'imagesloaded/imagesloaded',
      'fizzy-ui-utils/utils'
    ], function( Flickity, imagesLoaded, utils ) {
      return factory( window, Flickity, imagesLoaded, utils );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('flickity'),
      require('imagesloaded'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.Flickity,
      window.imagesLoaded,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, imagesLoaded, utils ) {
'use strict';

Flickity.createMethods.push('_createImagesLoaded');

Flickity.prototype._createImagesLoaded = function() {
  this.on( 'activate', this.imagesLoaded );
};

Flickity.prototype.imagesLoaded = function() {
  if ( !this.options.imagesLoaded ) {
    return;
  }
  var _this = this;
  function onImagesLoadedProgress( instance, image ) {
    // check if image is a cell
    var cell = _this.getCell( image.img );
    // otherwise get its parents
    var cellElem = cell && cell.element ||
      utils.getParent( image.img, '.flickity-slider > *' );
    _this.cellSizeChange( cellElem );
  }
  imagesLoaded( this.slider ).on( 'progress', onImagesLoadedProgress );
};

return Flickity;

}));
