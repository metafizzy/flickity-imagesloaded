test( 'images', function( assert ) {
  'use strict';

  var done = assert.async();
  var gallery = document.querySelector('#images');

  var flkty = new Flickity( gallery, {
    imagesLoaded: true,
    percentPosition: false
  });

  imagesLoaded( gallery, function() {
    var cellX = 0;
    for ( var i=0, len = flkty.cells.length; i < len; i++ ) {
      var cell = flkty.cells[i];
      ok( cell.size.width, 'cell has width' );
      var isApprox = isPositionApprox( cell.element.style.left, cell.x );
      ok( isApprox, 'cell ' + i + 'at proper position' );
      cellX += cell.size.width;
    }
  
    equal( flkty.viewport.style.height, '140px', 'gallery height set' );

    done();
  });

});
