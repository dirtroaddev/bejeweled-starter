const Screen = require("./screen");
const Cursor = require("./cursor");

class Bejeweled {

  constructor() {

    this.playerTurn = "O";

    // Initialize this
    this.grid = [];

    this.cursor = new Cursor(8, 8);

    Screen.initialize(8, 8);
    Screen.setGridlines(false);

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static checkForMatches(grid) {
    let matches = [];
    const numRows = grid.length;
    const numCols = grid[0].length;

    // Check for horizontal matches
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols - 2; col++) {
        const jewel = grid[row][col];
        if (jewel !== null && jewel === grid[row][col + 1] && jewel === grid[row][col + 2]) {
          matches.push({ row: row, startCol: col, endCol: col + 2, direction: 'horizontal' });
          col += 2; // Skip over matched jewels
        }
      }
    }

    // Check for vertical matches
    for (let col = 0; col < numCols; col++) {
      for (let row = 0; row < numRows - 2; row++) {
        const jewel = grid[row][col];
        if (jewel !== null && jewel === grid[row + 1][col] && jewel === grid[row + 2][col]) {
          matches.push({ col: col, startRow: row, endRow: row + 2, direction: 'vertical' });
          row += 2; // Skip over matched jewels
        }
      }
    }

    // This method now returns a list of match information.
    // You can modify it to act directly on the grid or to just indicate whether any match exists.
    return matches;
  }

}

module.exports = Bejeweled;
