//CONTROLLER

var Controller = function(model,view) {
};

Controller.prototype = {
  whichColumn: function() {
    model.dropCol(parseInt($(this).attr('class')[3], 10));
    // console.log(parseInt($(this).attr('class')[3]));
  },
  initializeEvents: function() {
    for ( var i = 1; i <= 7; i++) {
    $("td").on('click', this.whichColumn);
  }
}
};

// DRIVER CODE

var model = new Board();
var view = new View();
var controller = new Controller(model, view);
controller.initializeEvents();
