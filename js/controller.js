//CONTROLLER

var Controller = function(model,view) {
  this.currentColor = "red";
};

Controller.prototype = {
  clickColumn: function() {
    var column = parseInt($(this).attr('class')[3], 10);
    var row = model.dropCol(column, controller.currentColor);
    if (model.gameWon(controller.otherColor())) {
      // this is just to short-circuit attempted plays when game is won
    } else if (row) {
      view.insertChip(row, column, controller.currentColor);
      if (model.gameWon(controller.currentColor)) {
        // this block should send message to view
        console.log("FUCKIN-A RIGHT " + controller.currentColor.toUpperCase());
      }
      controller.changeTurn();
    }
  },

  otherColor: function() {
    if (this.currentColor === "red") {
      return "black";
    } else if (this.currentColor === "black") {
      return "red";
    } else {
      console.log("WHAT THE FUCK");
    }
  },

  changeTurn: function() {
    controller.currentColor = controller.otherColor();
  },

  initializeEvents: function() {
    $("td").on('click', this.clickColumn);

    $("#start").one("submit", function(event) {
      event.preventDefault();
      $(this).find('input[type="submit"]').attr('disabled','disabled');
      console.log("working!");
    });
  },

  startGame: function() {
    this.initializeEvents();
    // this.initializePlayers(red, black);
  }
}

// DRIVER CODE

var model = new Board();
var view = new View();
var controller = new Controller(model, view);
controller.startGame();



