import { array, number } from "prop-types";

const putBombs = (board = array, bombs = number) => {
  let fila = 0;
  let columna = 0;
  let lenght = board.length;

  while (bombs > 0) {
    do {
      fila = Math.round(Math.random() * (lenght - 1));
      columna = Math.round(Math.random() * (lenght - 1));
    } while (board[fila][columna] === 9); //bomba

    board[fila][columna] = 9; //pongo bomba

    let filaPosterior = Math.min(lenght - 1, fila + 1);
    let columnaPosterior = Math.min(lenght - 1, columna + 1);

    for (
      let filaAnterior = Math.max(0, fila - 1);
      filaAnterior <= filaPosterior;
      filaAnterior++
    ) {
      for (
        let columnaAnterior = Math.max(0, columna - 1);
        columnaAnterior <= columnaPosterior;
        columnaAnterior++
      ) {
        if (board[filaAnterior][columnaAnterior] !== 9) {
          board[filaAnterior][columnaAnterior] =
            board[filaAnterior][columnaAnterior] + 1;
        }
      }
    }
    bombs = bombs - 1;
  }

  return board;
};

export default putBombs;
