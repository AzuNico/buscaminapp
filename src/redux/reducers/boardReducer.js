import boardGenerator from "../../utils/boardGenerator";
import putBombs from "../../utils/putBombs";
import uncoverCells from "../../utils/uncoverCells";

export const types = {
  setDimension: "SET_DIMENSION",
  setBombs: "SET_BOMBS",
  setFirstClick: "SET_FIRST_CLICK",
  setVisibilityBoard: "SET_VISIBILITY_BOARD",
  showLand: "SHOW_LAND",
};

const initialState = { firstClick: false };

export default (state = initialState, action = {}) => {
  const { dimensionBoard, isFirstClick, open, value } = action;
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
    case types.setVisibilityBoard:
      const lenght = Number(value);
      const row = new Array(lenght);
      const boardVisibility = boardGenerator(row, false);
      return { ...state, boardVisibility };
    case types.showLand:
      const indexX = open.position[0];
      const indexY = open.position[1];
      const newVisibilityBoard = uncoverCells(
        [...state.board],
        [...state.boardVisibility],
        indexX,
        indexY
      )
      console.log("NEW VISIBILITY BOARD", newVisibilityBoard);
      
      return {
        ...state,
        // boardVisibility: state.boardVisibility.map((innerArray, index) => {
        //   if (index === indexX)
        //     return innerArray.map((item, index) => {
        //       if (index === indexY) return open.open;
        //       return item;
        //     });
        //   return innerArray;
        boardVisibility: newVisibilityBoard
      };

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
  setVisibilityBoard: (value) => ({
    type: types.setVisibilityBoard,
    value,
  }),
  showLand: (open) => ({
    type: types.showLand,
    open,
  }),
};

export const selectors = {
  getDimension: ({ boardReducer }) => boardReducer.dimensionBoard,
  getBoard: ({ boardReducer }) => boardReducer.board,
  isFirstClick: ({ boardReducer }) => boardReducer.firstClick,
  getBoardVisibility: ({ boardReducer }) => boardReducer.boardVisibility,
};
