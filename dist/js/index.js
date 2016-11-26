webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(7);
	__webpack_require__(7);
	__webpack_require__(12);
	module.exports = __webpack_require__(13);


/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2);
	var slick = __webpack_require__(9);
	var styles = __webpack_require__(6).modules.index_slider;

	var $gallery = $('.' + styles.wrapper);

	$gallery.slick({
	  slidesToShow:   1,
	  slidesToScroll: 1,
	  arrows:         false,
	  dots:           true,
	});

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	var styles = __webpack_require__(6).modules.index_production;
	var $ = __webpack_require__(2);

	var $headers = $('.' + styles.header);
	var $content = $('.' + styles.content);

	$headers.on('click', function(){
	  $headers.removeClass(styles.header_active);
	  $content.removeClass(styles.content_active);
	  var $this = $(this);
	  $this.addClass(styles.header_active);
	  $('#' + $this.data('for')).addClass(styles.content_active);
	});


/***/ }

});