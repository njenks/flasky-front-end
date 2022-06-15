import React from "react";

const Cat = ({name, chipNum}) => {
  return (
    <li>
      <h3>{name}</h3>
      <span>Chip #: {chipNum}</span>
      <button>add chip</button>
    </li>
  );
}

export default Cat;