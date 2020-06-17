import React from "react";
import Board from "../component/Board";
import "../../App.css";
// import boardGenerator from "../../utils/boardGenerator";
// import putBombs from "../../utils/putBombs";
import { selectors } from "../../redux/reducers/boardReducer";
import { useSelector } from "react-redux";
import MenuLayout from "../../layout/menu/MenuLayout";

export default function BoardContainer() {
  const dimension = useSelector(selectors.getDimension);
  const board = useSelector(selectors.getBoard);
  const visibilityBoard = useSelector(selectors.getBoardVisibility);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {dimension === undefined ? (
        <h1>¡Buscaminas!</h1>
      ) : (
        <Board visibilityBoard={visibilityBoard} arrLands={board} />
      )}
      <div style={{padding: "1rem"}}>
        <MenuLayout />
      </div>
    </div>
  );
}
