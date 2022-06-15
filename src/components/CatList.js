import React from "react";
import Cat from "./Cat";
import "./CatList.css";

export const CatList = ({cats}) => {
  return (
    <ul>
      <h2>Cat Count: 5</h2>
      {cats.map(cat => {
        return <Cat name={cat.name} chipNum={cat.chipNumber} />
      })}
    </ul>
  );
}

export default CatList;