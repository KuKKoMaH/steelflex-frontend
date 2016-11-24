var $ = require('jquery');
var slick = require('slick-carousel');
var magnificPopup  = require('magnific-popup');
var styles = require('../../js/styles').modules.metalworking_gallery;

var $bigGallery = $('.' + styles.big_gallery);

$bigGallery.slick({
  slidesToShow:   1,
  slidesToScroll: 1,
  arrows:         false,
  fade:           true,
  asNavFor:       '.' + styles.small_gallery
});
$bigGallery.each(function(i, gallery) {
  $(gallery).magnificPopup({
    delegate: 'a',
    type:     'image',
    gallery:  {
      enabled:            true,
      navigateByImgClick: true,
      preload:            [0, 1]
    },
  });
});

$('.' + styles.small_gallery).slick({
  slidesToShow:   3,
  slidesToScroll: 1,
  asNavFor:       '.' + styles.big_gallery,
  dots:           false,
  focusOnSelect:  true,
  variableWidth:  true,
  centerMode:     true,
});