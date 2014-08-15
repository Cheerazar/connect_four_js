// VIEW
var View = function(){
  };

View.prototype = {
// Next steps are to update the view with data from the model.
  insertChip: function(row, col, color) {
    var position = $('#row' + row +' .col' + col + ' .chip').offset();
    var chip = $('#ani_board .ani_chip_container .col' + col);
    $(chip).css("background-color", color);
    $(chip).animate({top: position.top}, 1000, reset.bind(chip) );
    setTimeout(function() {
      $('#row' + row +' .col' + col + ' div').addClass(color);
    },1000);
  }
};

var reset = function() {
  var chip = this;
  var col = chip.attr('class').split(' ')[1];
  chip.toggleClass(col);
  chip.toggleClass("tag");
  $('.tag').remove();
  $('#ani_board').append("<div class='ani_chip_container'><div class='ani_chip col1' id='ani1'></div></div>\
      <div class='ani_chip_container'><div class='ani_chip col2' id='ani2'></div></div>\
      <div class='ani_chip_container'><div class='ani_chip col3' id='ani3'></div></div>\
      <div class='ani_chip_container'><div class='ani_chip col4' id='ani4'></div></div>\
      <div class='ani_chip_container'><div class='ani_chip col5' id='ani5'></div></div>\
      <div class='ani_chip_container'><div class='ani_chip col6' id='ani6'></div></div>\
      <div class='ani_chip_container'><div class='ani_chip col7' id='ani7'></div></div>");
};


// <tr id="row1">; <td class="col1"> <div class="chip">

// ANIMATION

    // <table class="board" id="animation_board">
    // <tr id="animation_row">
    //   <td class="col1"><div class="animation_chip"></div></td>


