var $ = require('jquery');
var slick = require('slick-carousel');
var styles = require('../../js/styles').modules.index_slider;

var $gallery = $('.' + styles.wrapper);

$gallery.slick({
  slidesToShow:   1,
  slidesToScroll: 1,
  arrows:         false,
  dots:           true,
});