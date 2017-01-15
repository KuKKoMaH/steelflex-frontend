var $ = require('jquery');
var maginificPopup = require('magnific-popup');
var styles = require('../../js/styles').modules.header;

$('.' + styles.fos + ' .b').magnificPopup({
  type: 'inline',
});
