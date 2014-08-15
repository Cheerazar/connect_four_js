// VIEW
var View = function(){
  };

View.prototype = {
// Next steps are to update the view with data from the model.
  insertChip: function(row, col, color) {
    $('#row' + row +' .col' + col + ' div').addClass(color);
    var position = $('#row' + row +' .col' + col + ' .chip').offset();
    var chip = $('#ani_board .ani_chip_container .col' + col);
    $(chip).animate({height: "300px"}, 1000);

    // Put a div for black and red in the container off screen in every cell.
    // on click we need to select the right animation cell (col and color)
    // animate it to the correct cell
    // recreate new div in its place.

  }
};

// <tr id="row1">; <td class="col1"> <div class="chip">

// ANIMATION

    // <table class="board" id="animation_board">
    // <tr id="animation_row">
    //   <td class="col1"><div class="animation_chip"></div></td>


