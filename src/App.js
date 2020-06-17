import React, { useEffect } from "react";
import "./App.css";
import BoardContainer from "./board/container/BoardContainer";
import MenuLayout from "./layout/menu/MenuLayout";
import { selectors, actions } from "./redux/reducers/boardReducer";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";

function App() {
  const youLose = useSelector(selectors.getGameOver);
  const openCells = useSelector(selectors.getOpenCells);
  const dimensionBoard = useSelector(selectors.getDimension);
  const totalCells = dimensionBoard * dimensionBoard;
  const cellsToWin = totalCells - dimensionBoard;

  const dispatch = useDispatch();

  useEffect(() => {
    if (openCells === cellsToWin) {
      swal("¡Ganaste!", "", "success");
      if (!youLose) {
        dispatch(actions.youWin());
      }
    }
  }, [cellsToWin, dispatch, openCells, youLose]);

  useEffect(() => {
    if (youLose) {
      swal("¡Boom!", "Perdiste... :(", "error");
    }
  }, [youLose]);

  return (
    <MenuLayout>
      <BoardContainer />
    </MenuLayout>
  );
}

export default App;
