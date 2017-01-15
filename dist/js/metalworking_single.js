webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14);
	__webpack_require__(1);
	__webpack_require__(7);
	__webpack_require__(7);
	__webpack_require__(15);
	__webpack_require__(8);
	__webpack_require__(15);
	__webpack_require__(8);
	__webpack_require__(15);
	module.exports = __webpack_require__(8);


/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	var tabStyles = __webpack_require__(6).modules.metalworks_tabs;
	var styles = __webpack_require__(6).pages.metalworking_single;
	var $ = __webpack_require__(2);

	var $headers = $('.' + tabStyles.item);
	var $content = $('.' + styles.tab);

	$headers.on('click', function(){
	  $headers.removeClass(tabStyles.active);
	  $content.removeClass(styles.active);
	  var $this = $(this);
	  $this.addClass(tabStyles.active);
	  $('#tab-' + $this.data('tab')).addClass(styles.active);
	});


/***/ }

});