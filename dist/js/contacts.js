webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(7);
	__webpack_require__(7);
	__webpack_require__(1);
	module.exports = __webpack_require__(10);


/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2);
	var scriptLoader = __webpack_require__(11);

	function createMap() {
	  var $el = $("#map");
	  var zoom = $el.data('zoom') || 7;
	  var coords = [$el.data('lat'), $el.data('lng')];
	  var markerImage = $el.data('marker');

	  var map = new ymaps.Map('map', {
	    center: coords,
	    zoom: zoom,
	    controls: ['zoomControl', 'fullscreenControl']
	  });
	  map.behaviors.disable('scrollZoom');

	  var marker = new Image();
	  marker.onload = function(){
	    var placemark = new ymaps.Placemark(coords, {}, {
	      iconLayout: 'default#image',
	      iconImageHref: markerImage,
	      iconImageSize: [marker.naturalWidth, marker.naturalHeight],
	      iconImageOffset: [-Math.ceil(marker.naturalWidth/2), -marker.naturalHeight]
	    });
	    map.geoObjects.add(placemark);
	  };
	  marker.src = markerImage;
	}

	scriptLoader('//api-maps.yandex.ru/2.1/?lang=ru_RU').then(function(){
	  ymaps.ready(createMap);
	});


/***/ },

/***/ 11:
/***/ function(module, exports) {

	function scriptLoader(url) {
	  if (Array.isArray(url)) {
	    var prom = [];
	    url.forEach(function (item) {
	      prom.push(scriptLoader(item));
	    });
	    return Promise.all(prom);
	  }

	  return new Promise(function (resolve, reject) {
	    var r = false;
	    var t = document.getElementsByTagName('script')[0];
	    var s = document.createElement('script');

	    s.type = 'text/javascript';
	    s.src = url;
	    s.async = true;
	    s.onload = s.onreadystatechange = function () {
	      if (!r && (!this.readyState || this.readyState === 'complete')) {
	        r = true;
	        resolve(this);
	      }
	    };
	    s.onerror = s.onabort = reject;
	    t.parentNode.insertBefore(s, t);
	  });
	}

	module.exports = scriptLoader;


/***/ }

});