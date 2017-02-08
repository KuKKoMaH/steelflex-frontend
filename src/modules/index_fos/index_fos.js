var styles = require('../../js/styles').modules.index_fos;

$('.' + styles.file_input).on('change', function(event) {
  var files = event.target.files;
  if(!files.length || !files[0].name) return;
  $('.' + styles.name).html(files[0].name);
});