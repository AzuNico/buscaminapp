const boardGenerator = (dimension, initValue) => {
  let row = new Array(dimension);

  for (let i = 0; i < dimension; i++) {
    row[i] = new Array(dimension);
    for (let j = 0; j < dimension; j++) {
      row[i][j] = initValue;
    }
  }

  return row;
};

export default boardGenerator;
