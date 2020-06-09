import boardGenerator from "../../utils/boardGenerator";

export const types = {
  setVisibilityBoard: "SET_VISIBILITY_BOARD",
  showLand: "SHOW_LAND",
};

const initialState = {};

export default (state = initialState, action = {}) => {
  const { open, value } = action;
  switch (action.type) {
    case types.setVisibilityBoard:
      const lenght = Number(value);
      console.log("LENGHT", lenght);
      const fila = new Array(lenght);
      const boardVisibility = boardGenerator(fila, false);
      return { ...state, boardVisibility };
    case types.showLand:
      const indexX = open.position[0];
      const indexY = open.position[1];
      return {
        ...state,
        boardVisibility: state.boardVisibility.map((innerArray, index) => {
          if (index === indexX)
            return innerArray.map((item, index) => {
              if (index === indexY) return open.open;
              return item;
            });
          return innerArray;
        }),
      };

    default:
      return state;
  }
};

export const actions = {
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
  getBoardVisibility: ({ landReducer }) => landReducer.boardVisibility,
};
