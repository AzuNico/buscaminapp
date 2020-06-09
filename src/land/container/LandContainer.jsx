import React, { useState, useEffect } from "react";
import Land from "../components/Land";
import { actions } from "../../redux/reducers/landReducer";
import {
  selectors,
  actions as boardActions,
} from "../../redux/reducers/boardReducer";
import { useDispatch, useSelector } from "react-redux";

export default function LandContainer({ bomb, isOpen, position }) {
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const isFirstClick = useSelector(selectors.isFirstClick);

  useEffect(() => {
    if (isFirstClick === false) {
      setFlag(false);
    }
  }, [isFirstClick]);

  const hanldeClick = () => {
    const open = {
      position,
      open: true,
    };
    console.log("FIRST CLICK?", isFirstClick);

    if (isFirstClick === false) {
      dispatch(boardActions.setFirstClick(true, position));
      dispatch(boardActions.setBombs());
    }
    dispatch(actions.showLand(open));

    

  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setFlag(!flag);
    if (isFirstClick === false) {
      dispatch(boardActions.setFirstClick(true, position));
      dispatch(boardActions.setBombs());
    } else {
      setFlag(!flag);
    }
  };

  return (
    <>
      <Land
        bomb={bomb}
        flag={flag}
        open={isOpen}
        onClick={() => hanldeClick()}
        onMenuContext={(event) => handleRightClick(event)}
      />
    </>
  );
}
