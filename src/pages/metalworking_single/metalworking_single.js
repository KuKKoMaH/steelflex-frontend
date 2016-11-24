var tabStyles = require('../../js/styles').modules.metalworks_tabs;
var styles = require('../../js/styles').pages.metalworking_single;
var $ = require('jquery');

var $headers = $('.' + tabStyles.item);
var $content = $('.' + styles.tab);

$headers.on('click', function(){
  $headers.removeClass(tabStyles.active);
  $content.removeClass(styles.active);
  var $this = $(this);
  $this.addClass(tabStyles.active);
  console.log($this.data('tab'));
  $('#tab-' + $this.data('tab')).addClass(styles.active);
});
