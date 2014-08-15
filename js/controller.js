//CONTROLLER

var Controller = function(model,view) {
  this.currentColor = "red";
};

Controller.prototype = {
  clickColumn: function() {
    var column = parseInt($(this).attr('class')[3], 10);
    var row = model.dropCol(column, this.currentColor);

    if (row) {
      view.insertChip(row, column, controller.currentColor);
      controller.changeTurn();
    }
  },

  changeTurn: function() {
    if (this.currentColor === "red") {
      this.currentColor = "black";
    } else if (this.currentColor === "black") {
      this.currentColor = "red";
    } else {
      console.log("WHAT THE FUCK");
    }
  },

  initializeEvents: function() {
    $("td").on('click', this.clickColumn);
  }
};

// DRIVER CODE

var model = new Board();
var view = new View();
var controller = new Controller(model, view);
controller.initializeEvents();
