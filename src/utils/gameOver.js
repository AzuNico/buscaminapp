export default function gameOver(board, fila, columna) {
  if (board[fila][columna] === 9) {
    return true;
  } else {
    return false;
  }
}
