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
      className="App"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
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
          <input
            onChange={(evt) => {
              handleChange(evt.target.value);
            }}
            id="dimension"
            type="number"
            value={value}
            min={2}
            max={10}
            step={2}
            precision={1}
            style={{
              height: 40,
              width: 50,
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
            }}
          />
          <br />
          <br />
          <Button onClick={() => handleClick()} variant="primary">
            Generar Tablero
          </Button>
        </form>
      </div>
      {children}
    </div>
  );
}
