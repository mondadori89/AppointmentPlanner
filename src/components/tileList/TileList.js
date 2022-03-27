import React from "react";
import { Tile } from "../../components/tile/Tile.js";

export const TileList = (props) => {
  const { objectsArray } = props;
  return (
    <div>
      <ul>
        {objectsArray.map((each) => (
          <li key={each.id}>
            <Tile
              object={each}
            />
          </li>
         ))}
      </ul>
    </div>
  );
};

