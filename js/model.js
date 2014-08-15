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
          // find adjacent cells to UL,U,UR, or R of same color
          var neighbors = this.neighborCells(i, j);
          var matches = this.matchCells(neighbors, currentColor);
          // if any of those matches are the start of a connect 4, we're done here
          if (this.checkVectors([i,j], matches)) {
            return true;
          }
        }
      }
    }
    return false; // Didn't find win condition anywhere
  },

  checkVectors: function(coords, matches) {
    var connectedFour = false;
    var winningColor = this.gameBoard['row'+coords[0]]['col'+coords[1]].color;
    // iterate through matches and follow each direction until 4 matches or failure
    for (var i=0; i<matches.length; i++) {
      var dY = coords[0] - matches[i][0]; // calculate vertical shift between matches
      var dX = coords[1] - matches[i][1]; // and ditto for horizontal

      if (this.followVector(coords, dY, dX)) {
        connectedFour = true;
      }
    }
    return connectedFour;
  },

  followVector: function(coords, rowShift, colShift) {
    var vectorLength = 1;
    var stillMatching = true;
    while (stillMatching && vectorLength < 4) {
      var newRow = coords[0]-rowShift; // calculate next row coord along vector
      var newCol = coords[1]-colShift; // ditto for next column coord
      stillMatching = (this.gameBoard['row'+coords[0]]['col'+coords[1]].color === this.gameBoard['row'+newRow]['col'+newCol].color)
      if (stillMatching) {
        vectorLength++;
        coords = [newRow, newCol];
      }
    }
    return stillMatching;
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
