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
    for (var i = 1; i <= 6; i++) { // row
      board['row' + i] = {};
      for (var j = 1; j <= 7; j++) { // column
        board['row' + i]['col' + j] = new Cell();
      }
    }
    return board;
  },

  gameWon: function (currentColor) {
    // iterate through all cells
    for (var i = 1; i <= 6; i++) { // row
      for (var j = 1; j <= 7; j++) { // column
        if(this.gameBoard['row' + i]['col' + j].color === currentColor) {
          console.log("Row "+i+", Column "+j+" is "+currentColor);
          // call method to check adjacent cells to UL, U, UR, and R
          // adjacentCells(i, j, color)
        }
      }
    }
      // check adjacent cells for matching color
        // for each match, follow direction and look for further matches
          // if 4 in a row, return true

    return false; // Didn't find win condition
  },


}
var board = new Board();

console.log(board.gameBoard)
board.gameBoard.row3.col6.color = "red";
board.gameWon("red");
