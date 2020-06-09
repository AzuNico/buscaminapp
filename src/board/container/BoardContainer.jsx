import React from "react";
import Board from "../component/Board";
// import boardGenerator from "../../utils/boardGenerator";
// import putBombs from "../../utils/putBombs";
import { selectors } from "../../redux/reducers/boardReducer";
import { selectors as landSelector } from "../../redux/reducers/landReducer";
import { useSelector } from "react-redux";

export default function BoardContainer() {
  const dimension = useSelector(selectors.getDimension);
  const board = useSelector(selectors.getBoard);
  const visibilityBoard = useSelector(landSelector.getBoardVisibility)

  return (
    <div>
      {dimension === undefined ? (
        <h1>¡Buscaminas!</h1>
      ) : (
        <Board visibilityBoard={visibilityBoard} arrLands={board} />
      )}
    </div>
  );
}
