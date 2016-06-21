QUnit.test( 'images', function( assert ) {
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
      assert.ok( cell.size.width, 'cell has width' );
      var isApprox = isPositionApprox( cell.element.style.left, cell.x );
      assert.ok( isApprox, 'cell ' + i + 'at proper position' );
      cellX += cell.size.width;
    }
  
    assert.equal( flkty.viewport.style.height, '140px', 'gallery height set' );

    done();
  });

});
