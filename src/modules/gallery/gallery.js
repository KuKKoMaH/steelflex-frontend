var $ = require('jquery');
var slick = require('slick-carousel');
var maginificPopup = require('magnific-popup');
var styles = require('../../js/styles').modules.gallery;

var $gallery = $('.' + styles.gallery);

$gallery.slick({
  slidesToShow:   5,
  slidesToScroll: 5,
  dots:           true,
  arrows:         false
});

$gallery.each(function(i, el) {
  $(el).magnificPopup({
    type: 'image',
    delegate: 'a:not(.slick-cloned)',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    },
  });
})
