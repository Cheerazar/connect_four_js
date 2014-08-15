var Board = function () {
  this.gameBoard = this.makeBoard()
};

var Cell = function() {
  this.empty = true;
  this.color = null;
}

Board.prototype = {
  makeBoard: function () {
    var board = {};
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
          // console.log("Row "+i+", Column "+j+" is "+currentColor);
          // call method to check adjacent cells to UL, U, UR, and R
          // adjacentCells(i, j, color)
          var neighbors = this.neighborCells(i, j);
          var matches = this.matchCells(neighbors, currentColor);
          debugger;
        }
      }
    }
      // check adjacent cells for matching color
        // for each match, follow direction and look for further matches
          // if 4 in a row, return true

    return false; // Didn't find win condition
  },

  potentialWinVectors: function(row, col) {
    // if ( !((row + 3 > 6) || (col + 3 > 7)) )
    var vectorsToWin = [];
    // if row + 3 > 6 || col - 3 < 1
    // [[row + 1, col - 1], [row + 2, col - 2], [row + 3, col -3]]

    // if row + 3 > 6
    // [[row + 1, col], [row + 2, col], [row + 3, col]]

    // if row + 3 > 6 || col + 3 > 7
    // [[row + 1, col + 1], [row + 2, col + 2], [row + 3, col + 3]]

    // if col + 3 > 7
    // [[row, col + 1], [row, col + 2], [row, col + 3]]
    for (var i = 0; i < 4; i++) {
      var vector = [];
      for (var j = 1; j < 4; j++) {

      }
    }
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
  },

  matchCells: function(cellSet, currentColor) {
    var matches = [];
    for (var i=0; i<cellSet.length; i++) {
      var currentCell = this.gameBoard['row'+cellSet[i][0]]['col'+cellSet[i][1]];
      if (currentCell.color === currentColor) {
        matches.push([cellSet[i][0], cellSet[i][1]]);
      }
    }
    return matches;
  },

  dropCol: function (column, currentColor) {
    for (var i = 1; i < 7; i++) {
      var currentCell = this.gameBoard['row' + i]['col' + column];
      if (currentCell.empty) {
        currentCell.empty = false;
        currentCell.color = currentColor;
        return i;  // return the row number
      }
    }

    return false; // row is full
  }
};
var board = new Board();

// console.log(board.gameBoard)
// board.gameBoard.row3.col6.color = "red";
// board.gameWon("red");

// neighbor cells test output for all cases
// console.log('row1, col1: ' + board.neighborCells(1, 1));
// console.log('row1, col7: ' + board.neighborCells(1, 7));
// console.log('row3, col3: ' + board.neighborCells(3, 3));
// console.log('row6, col4: ' + board.neighborCells(6, 4));
// console.log('row6, col7: ' + board.neighborCells(6, 7));
// console.log('row3, col3, result index 3 (3,4): ' + board.neighborCells(3, 3)[3]);
