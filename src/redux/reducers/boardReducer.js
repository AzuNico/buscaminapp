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
    firstClickPositionBomb,
    openCells,
  } = action;
  switch (action.type) {
    case types.initBoard:
      return {
        ...state,
        dimensionBoard: Number(dimensionBoard),
        board: boardGenerator(dimensionBoard, 0),
        boardVisibility: boardGenerator(dimensionBoard, false),
        boomPosition: null,
        firstClick: false,
        firstClickPosition: null,
        gameOver: false,
        youWin: false,
        openCells: 0,
      };

    case types.setFirstClick:
      return {
        ...state,
        firstClick: isFirstClick,
        firstClickPosition,
      };

    case types.setBombs:
      const oldBoard = [...state.board];
      const bombs = state.dimensionBoard;
      return {
        ...state,
        board: putBombs(oldBoard, bombs, firstClickPositionBomb),
      };

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
        openCells: state.openCells + openCells,
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
        youWin: false,
      };
    case types.youWin:
      return {
        ...state,
        youWin: true,
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
    firstClickPositionBomb,
  }),
  showLand: (arr, openCells) => ({
    type: types.showLand,
    positions: arr,
    openCells,
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
  getOpenCells: ({ boardReducer }) => boardReducer.openCells,
};
