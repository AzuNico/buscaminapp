import React from "react";
import bombIcon from "../../assets/svg/bomb-solid.svg";
import flagIcon from "../../assets/svg/flag-solid.svg";

export default function Land({ bomb, flag, open, onClick , onMenuContext }) {
  return (
    <>
      {open ? (
        <div className="land brown">
          {bomb === 9 ? (
            <img src={bombIcon} alt="bomb" width={30} />
          ) : (
            <p style={{ margin: "auto" }}>{bomb === 0 ? "" : bomb}</p>
          )}
        </div>
      ) : flag ? (
        <div className="land green " onClick={onClick} onContextMenu={onMenuContext} >
          <img src={flagIcon} alt="flag" width={30} />
        </div>
      ) : (
        <div className="land green " onClick={onClick} onContextMenu={onMenuContext}/>
      )}
    </>
  );
}
