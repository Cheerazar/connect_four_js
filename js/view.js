// VIEW
var View = function(){
  };

View.prototype = {
// Next steps are to update the view with data from the model.
  insertChip: function(row, col, color) {
    $('#row' + row +' .col' + col + ' div').addClass(color);
  }
};

// <tr id="row1">; <td class="col1"> <div class="chip">

