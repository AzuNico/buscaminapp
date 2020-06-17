export default function countUncoverCells(boardVisible, dimension) {
  let contador;

  for (let x = 0; x < dimension; x++) {
    for (let y = 0; y < dimension; y++) {
      if (boardVisible[x][y]) {
        contador = contador + 1;
      }
    }
  }
  return contador
}
