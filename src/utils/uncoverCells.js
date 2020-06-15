const uncoverCells = (board, boardVisibility, row, col) => {
  console.log("ENTRANDO A UNCOVERCELLS");

  if (boardVisibility[row][col] === false) {
    boardVisibility[row][col] = true;
    console.log("DENTRO DEL PRIMER IF UNCOVER");
    console.log("VISIBILITY BOARD", boardVisibility);
    console.log("BOARD", board);

    if (board[row][col] === 0) {
      console.log("DENTRO DEL SEGUNDO IF board[row][col] === 0");

      for (
        let row2 = Math.max(0, row - 1);
        row2 < Math.min(9, row + 1);
        row2++
      ) {
        console.log("DENTRO DEL PRIMER FOR CON ROW2 = ", row2);

        for (
          let col2 = Math.max(0, col - 1);
          col2 < Math.min(9, col + 1);
          col2++
        ) {
          console.log("DENTRO DEL SEGUNDO FOR CON COL2 = ", col2);
          if (board[row2][col2] !== 9) {
            console.log("DENTRO DEL TERCER IF board[row2][col2] !== 9");
            console.log("BOARD VISIBILITY", boardVisibility);

            uncoverCells(board, boardVisibility, row2, col2);
            console.log("BOARD VISIBILITY NUEVA ITERACION", boardVisibility);
          }
        }
      }
    }
    return boardVisibility
  }
};

export default uncoverCells;
