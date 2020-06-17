import React, { useState, useEffect } from "react";
import Land from "../components/Land";
import { selectors, actions } from "../../redux/reducers/boardReducer";
import { useDispatch, useSelector } from "react-redux";

export default function LandContainer({ bomb, isOpen, position }) {
  const [flag, setFlag] = useState(false);
  const [lose, setLose] = useState(false);
  const dispatch = useDispatch();
  const isFirstClick = useSelector(selectors.isFirstClick);
  const youWin = useSelector(selectors.getYouWin);

  useEffect(() => {
    if (isFirstClick === false) {
      setFlag(false);
    }
  }, [isFirstClick]);

  const hanldeClick = () => {
    if (isFirstClick === false) {
      dispatch(actions.setFirstClick(true, position));
      dispatch(actions.setBombs(position));
    }

    dispatch(actions.showLand(position));

    if (bomb === 9) {
      dispatch(actions.gameOver(position));
      setLose(true);
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setFlag(!flag);
    if (isFirstClick === false) {
      dispatch(actions.setFirstClick(true, position));
      dispatch(actions.setBombs(position));
    } else {
      setFlag(!flag);
    }
  };

  return (
    <>
      <Land
        bomb={bomb}
        win={youWin}
        lose={lose}
        flag={flag}
        open={isOpen}
        onClick={() => hanldeClick()}
        onMenuContext={(event) => handleRightClick(event)}
      />
    </>
  );
}
