const boardGenerator = (arrBrd,initValue) => {
  for (let i = 0; i < arrBrd.length; i++) {
    arrBrd[i] = new Array(arrBrd.length);   
    for (let j = 0; j < arrBrd[i].length; j++) {
      arrBrd[i][j] = initValue;
    }
  }

  return arrBrd;
};

export default boardGenerator;
