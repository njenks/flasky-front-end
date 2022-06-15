import { React, PropTypes } from "react";
import "./Cat.css";

const Cat = ({ name, chipNum }) => {
  return (
    <li>
      <h3>{name}</h3>
      <span>Chip #: {chipNum}</span>
      <button>add chip</button>
    </li>
  );
};

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  chipNum: PropTypes.string.isRequired,
};

export default Cat;
