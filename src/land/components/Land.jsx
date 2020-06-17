import React from "react";
import bombIcon from "../../assets/svg/bomb-solid.svg";
import flagIcon from "../../assets/svg/flag-solid.svg";
import exploIcon from "../../assets/svg/explosion.svg";

export default function Land({
  bomb,
  lose,
  win,
  flag,
  open,
  onClick,
  onMenuContext,
}) {
  return (
    <>
      {open ? (
        <div className="land brown">
          {bomb === 9 ? (
            lose ? (
              <img src={exploIcon} alt="explosion" width={30} />
            ) : (
              <img src={bombIcon} alt="bomb" width={30} />
            )
          ) : (
            <p style={{ margin: "auto" , fontWeight: "bold"}}>{bomb === 0 ? "" : bomb}</p>
          )}
        </div>
      ) : win ? (
        <div className="land green " >
          <img src={bombIcon} alt="bomb" width={30} />
        </div>
      ) : flag ? (
        <div
          className="land green "
          onClick={onClick}
          onContextMenu={onMenuContext}
        >
          <img src={flagIcon} alt="flag" width={30} />
        </div>
      ) : (
        <div
          className="land green "
          onClick={onClick}
          onContextMenu={onMenuContext}
        />
      )}
    </>
  );
}
