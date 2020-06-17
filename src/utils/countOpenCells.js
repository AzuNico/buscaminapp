import { array } from "prop-types";

const countOpenCells = (boardVisible = array) => {
  let contador = 0;

  for (let x = 0; x < boardVisible.length; x++) {
    for (let y = 0; y < boardVisible.length; y++) {
      if (boardVisible[x][y] === true) {
        contador = contador + 1;
      }
    }
  }
  return contador;
};

export default countOpenCells;
