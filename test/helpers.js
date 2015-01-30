// position values can be off by 0.1% or 1px
// isPositionApprox( '185.2px', 185 ) => true
window.isPositionApprox = function( value, expected ) {
  var isPercent = value.indexOf('%') != -1;
  value = parseFloat( value );
  var diff = Math.abs( expected - value );
  return isPercent ? diff < 0.1 : diff <= 1;
};
