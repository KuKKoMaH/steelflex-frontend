var styles = require('../../js/styles').modules.index_production;
var $ = require('jquery');

var $headers = $('.' + styles.header);
var $content = $('.' + styles.content);

$headers.on('click', function(){
  $headers.removeClass(styles.header_active);
  $content.removeClass(styles.content_active);
  var $this = $(this);
  $this.addClass(styles.header_active);
  $('#' + $this.data('for')).addClass(styles.content_active);
});
