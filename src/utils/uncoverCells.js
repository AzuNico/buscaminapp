const uncoverCells = (board, boardVisibility, row, col) => {
  if (boardVisibility[row][col] === false) {
    boardVisibility[row][col] = true;

    if (board[row][col] === 0) {
      for (
        let row2 = Math.max(0, row - 1);
        row2 < Math.min(9, row + 1);
        row2++
      ) {
        for (
          let col2 = Math.max(0, col - 1);
          col2 < Math.min(9, col + 1);
          col2++
        ) {
          if (board[row2][col2] !== 9) {
            uncoverCells(board, boardVisibility, row2, col2);
          }
        }
      }
    }
  }
};

export default uncoverCells;
