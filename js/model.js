var Board = function () {
  this.gameBoard = this.makeBoard()
};

Board.prototype = {
  makeBoard: function() {
    var board = {}
    for (var i = 0; i < 6; i++) { // row
      board['row' + i] = {};
      for (var j = 0; j < 7; j++) { // column
        board['row' + i]['col' + j] = {empty: true, color: null};
      }
    }
    return board;
  }
}
var board = new Board();

console.log(board.gameBoard)
