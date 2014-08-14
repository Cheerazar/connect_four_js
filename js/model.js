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
    // find next filled cell
      // check adjacent cells for matching color
        // for each match, follow direction and look for further matches
          // if 4 in a row, game is won
  }
}
var board = new Board();

console.log(board.gameBoard)
