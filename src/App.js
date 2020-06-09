import React from "react";
import "./App.css";
import BoardContainer from "./board/container/BoardContainer";
import MenuLayout from "./layout/menu/MenuLayout";

function App() {
  return (
    <MenuLayout>
      <BoardContainer />
    </MenuLayout>
  );
}

export default App;
