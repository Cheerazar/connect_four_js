var Board = function () {
  this.gameBoard = this.makeBoard()
};

var Cell = function() {
  this.empty = true;
  this.color = null;
}

Board.prototype = {
  makeBoard: function () {
    var board = {}
    for (var i = 0; i < 6; i++) { // row
      board['row' + i] = {};
      for (var j = 0; j < 7; j++) { // column
        board['row' + i]['col' + j] = new Cell();
      }
    }
    return board;
  },

  gameWon: function () {

  }
}
var board = new Board();

console.log(board.gameBoard)
