import boardGenerator from "../../utils/boardGenerator";
import putBombs from "../../utils/putBombs";

export const types = {
  setDimension: "SET_DIMENSION",
  setBombs: "SET_BOMBS",
  setFirstClick: "SET_FIRST_CLICK",
};

const initialState = { firstClick: false };

export default (state = initialState, action = {}) => {
  const { dimensionBoard, isFirstClick } = action;
  switch (action.type) {
    case types.setDimension:
      const fila = new Array(Number(dimensionBoard));
      const board = boardGenerator(fila, 0);
      return {
        ...state,
        dimensionBoard: Number(dimensionBoard),
        board,
      };
    case types.setFirstClick:
      return { ...state, firstClick: isFirstClick };
    case types.setBombs:
      console.log(types.setBombs);
      const oldBoard = [...state.board];
      const bombs = state.dimensionBoard;
      return { ...state, board: putBombs(oldBoard, bombs) };

    default:
      return state;
  }
};

export const actions = {
  setDimension: (dimensionBoard) => ({
    type: types.setDimension,
    dimensionBoard,
  }),
  setFirstClick: (isFirstClick, positionFirstClick) => ({
    type: types.setFirstClick,
    isFirstClick,
    positionFirstClick,
  }),
  setBombs: () => ({
    type: types.setBombs,
  }),
};

export const selectors = {
  getDimension: ({ boardReducer }) => boardReducer.dimensionBoard,
  getBoard: ({ boardReducer }) => boardReducer.board,
  isFirstClick: ({ boardReducer }) => boardReducer.firstClick,
};
