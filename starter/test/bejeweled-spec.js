const { expect } = require('chai');
const Bejeweled = require("../class/bejeweled.js");

describe('Bejeweled', function () {

  describe('Basic Board Setup', function () {
    it('should create a board with the correct dimensions', function () {
      const game = new Bejeweled();
      expect(game.grid).to.be.an('array');
      expect(game.grid.length).to.equal(8);
      game.grid.forEach(row => {
        expect(row.length).to.equal(8);
      });
    });
  });

  describe('A valid swap that matches 3', function () {
    it('should perform a swap and match 3 jewels', function () {
      const game = new Bejeweled();
      // Assuming a setup where a swap at (0,0) and (0,1) would result in a match
      game.grid = [
        ['R', 'G', 'R', 'R', 'G', 'B', 'Y', 'G'],
        ['B', 'B', 'G', 'Y', 'B', 'G', 'R', 'Y'],
        // Assume the rest of the grid is filled out
      ];
      game.swap(0, 0, 0, 1);
      const matchFound = game.checkForMatches(); // Assuming this method now checks the entire grid for matches
      expect(matchFound).to.be.true;
    });
  });

  describe('Swaps that set up combos', function () {
    it('should perform a swap that sets up combos', function () {
      const game = new Bejeweled();
      // Setting up a scenario for combos
      game.grid = [
        ['R', 'R', 'G', 'B', 'G', 'B', 'Y', 'G'],
        ['R', 'G', 'R', 'Y', 'B', 'G', 'R', 'Y'],
        // Rest of the grid
      ];
      game.swap(0, 2, 1, 2); // Perform a swap that would trigger a combo
      const combosTriggered = game.checkForCombos(); // This method would need to check for combos after the initial matches
      expect(combosTriggered).to.be.true;
    });
  });

  describe('Checking if there are no possible valid moves', function () {
    it('should identify when no valid moves are left', function () {
      const game = new Bejeweled();
      // Setting up a grid with no possible moves
      game.grid = [
        ['R', 'G', 'B', 'Y', 'G', 'B', 'R', 'Y'],
        ['G', 'R', 'Y', 'B', 'Y', 'G', 'B', 'R'],
        // Rest of the grid filled such that no moves are possible
      ];
      const noMoves = game.checkForNoMoves(); // Assuming this method checks the grid for any possible moves
      expect(noMoves).to.be.true;
    });
  });

});
