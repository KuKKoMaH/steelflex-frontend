var $ = require('jquery');
var slick = require('slick-carousel');
var styles = require('../../js/styles').modules.index_slider;

var $gallery = $('.' + styles.gallery);

$gallery.slick({
  slidesToShow:   5,
  slidesToScroll: 5,
  dots:           true,
  arrows:         false
});

$gallery.magnificPopup({
  type: 'image',
  delegate: 'a:not(.slick-cloned)',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
  },
});