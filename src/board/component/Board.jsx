import React from "react";
import LandContainer from "../../land/container/LandContainer";

export default function Board({ arrLands, visibilityBoard }) {
  return (
    <div>
      <table>
        <tbody>
          {arrLands.map((x, i) => {
            return (
              <tr key={i}>
                {x.map((y, j) => {
                  return (
                    <td key={j}>
                      <LandContainer
                        isOpen={visibilityBoard[i][j]}
                        position={[i, j]}
                        bomb={y}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
