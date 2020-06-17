import boardGenerator from "../../utils/boardGenerator";
import putBombs from "../../utils/putBombs";
import uncoverCells from "../../utils/uncoverCells";
import gameOver from "../../utils/gameOver";

export const types = {
  initBoard: "INIT_BOARD",
  setBombs: "SET_BOMBS",
  setFirstClick: "SET_FIRST_CLICK",
  showLand: "SHOW_LAND",
  gameOver: "GAME_OVER",
  youWin: "YOU_WIN",
};

const initialState = {};

export default (state = initialState, action = {}) => {
  const {
    dimensionBoard,
    isFirstClick,
    positions,
    boom,
    firstClickPosition,
    firstClickPositionBomb
  } = action;
  switch (action.type) {
    case types.initBoard:
      return {
        ...state,
        dimensionBoard: Number(dimensionBoard),
        board: boardGenerator(dimensionBoard, 0),
        boardVisibility: boardGenerator(dimensionBoard, false),
        firstClick: false,
        firstClickPosition: null,
        gameOver: false,
        win: false,
      };

    case types.setFirstClick:
      console.log("first clicl position set firstClick", firstClickPosition);
      return {
        ...state,
        firstClick: isFirstClick,
        firstClickPosition,
      };

    case types.setBombs:
      const oldBoard = [...state.board];
      const bombs = state.dimensionBoard;
      console.log("first clicl position set bombs", firstClickPositionBomb);
      
      return { ...state, board: putBombs(oldBoard, bombs, firstClickPositionBomb) };

    case types.showLand:
      const indexX = positions[0];
      const indexY = positions[1];
      const newVisibilityBoard = uncoverCells(
        [...state.board],
        [...state.boardVisibility],
        indexX,
        indexY
      );
      return {
        ...state,
        boardVisibility: newVisibilityBoard,
      };

    case types.gameOver:
      const boardReveal = [...state.boardVisibility].map((innerArray) =>
        innerArray.map((item) => (item = true))
      );
      return {
        ...state,
        boardVisibility: boardReveal,
        gameOver: true,
        boomPosition: boom,
      };

    default:
      return state;
  }
};

export const actions = {
  initBoard: (dimensionBoard) => ({
    type: types.initBoard,
    dimensionBoard,
  }),
  setFirstClick: (isFirstClick, firstClickPosition) => ({
    type: types.setFirstClick,
    isFirstClick,
    firstClickPosition,
  }),
  setBombs: (firstClickPositionBomb) => ({
    type: types.setBombs,
    firstClickPositionBomb
  }),
  showLand: (arr) => ({
    type: types.showLand,
    positions: arr,
  }),
  gameOver: (position) => ({
    type: types.gameOver,
    boom: position,
  }),
  youWin: () => ({
    type: types.youWin,
  }),
};

export const selectors = {
  getDimension: ({ boardReducer }) => boardReducer.dimensionBoard,
  getBoard: ({ boardReducer }) => boardReducer.board,
  getYouWin: ({ boardReducer }) => boardReducer.youWin,
  getGameOver: ({ boardReducer }) => boardReducer.gameOver,
  getBoomPosition: ({ boardReducer }) => boardReducer.boomPosition,
  isFirstClick: ({ boardReducer }) => boardReducer.firstClick,
  getFirstClickPosition: ({ boardReducer }) => boardReducer.firstClickPosition,
  getBoardVisibility: ({ boardReducer }) => boardReducer.boardVisibility,
};
