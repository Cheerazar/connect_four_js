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
          // var neighborCells = adjacentCells(i, j)
          // var matches = matchCells(neighborCells, color)
        }
      }
    }
      // check adjacent cells for matching color
        // for each match, follow direction and look for further matches
          // if 4 in a row, return true

    return false; // Didn't find win condition
  },

  neighborCells: function(row, col) {
    var neighbors = [];
    if (col !== 1 && row !== 6) {
      neighbors.push([row+1, col-1]);
    }
    if (row !== 6) {
      neighbors.push([row+1, col]);
      if (col !== 7) {
        neighbors.push([row+1,col+1]);
      }
    }
    if (col !== 7) {
      neighbors.push([row, col+1])
    }
    return neighbors;
  }
}
var board = new Board();

console.log(board.gameBoard)
board.gameBoard.row3.col6.color = "red";
board.gameWon("red");

// neighbor cells test output for all cases
// console.log('row1, col1: ' + board.neighborCells(1, 1));
// console.log('row1, col7: ' + board.neighborCells(1, 7));
// console.log('row3, col3: ' + board.neighborCells(3, 3));
// console.log('row6, col4: ' + board.neighborCells(6, 4));
// console.log('row6, col7: ' + board.neighborCells(6, 7));
// console.log('row3, col3, result index 3 (3,4): ' + board.neighborCells(3, 3)[3]);

