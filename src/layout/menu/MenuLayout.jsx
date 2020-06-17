import React, { useState } from "react";
import "../../App.css";
import { actions } from "../../redux/reducers/boardReducer";

import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

export default function MenuLayout({ children }) {
  const [value, setValue] = useState(10);

  const dispatch = useDispatch();

  const handleChange = (val) => {
    setValue(val);
  };

  const handleClick = () => {
    dispatch(actions.initBoard(value));
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
      }}
    >
      <form>
        <label htmlFor="dimension">Dimensión del tablero </label>
        <br />
        <select
          defaultValue={value}
          onChange={(evt) => {
            handleChange(evt.target.value);
          }}
        >
          <option value="10">10</option>
          <option value="8">8</option>
          <option value="6">6</option>
          <option value="4">4</option>
          <option value="2">2</option>
        </select>
        <br />
        <br />
        <Button onClick={() => handleClick()} variant="primary">
          Generar Tablero
        </Button>
      </form>
    </div>
  );
}
