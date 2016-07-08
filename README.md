# Flickity imagesLoaded

Enables the `imagesLoaded` option for [Flickity](http://flickity.metafizzy.co)

``` js
var flkty = new Flickity( '.carousel', {
  // re-position cells when images load
  imagesLoaded: true
})
```

## Install

This package is already included in `flickity.pkgd.js` and `flickity.pkgd.min.js`. You do not need to install this package if you are using those files.

Bower: `bower install flickity-imagesloaded`

npm: `npm install flickity-imagesloaded`

### RequireJS

``` js
requirejs( [ 'path/to/flickity-imagesloaded' ], function( Flickity ) {
  var flkty = new Flickity( '.carousel', {
    imagesLoaded: true
  });
});
```

### Browserify

``` js
var Flickity = require('flickity-imagesloaded');

var flkty = new Flickity( '.carousel', {
  imagesLoaded: true
});
```

---

By [Metafizzy](http://metafizzy.co)
