import React, { useEffect } from "react";
import "./App.css";
import BoardContainer from "./board/container/BoardContainer";
import MenuLayout from "./layout/menu/MenuLayout";
import { selectors, actions } from "./redux/reducers/boardReducer";
import countUncoverCells from "./utils/countUncoverCells";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import { render } from "@testing-library/react";

function App() {
  const youLose = useSelector(selectors.getGameOver);

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
