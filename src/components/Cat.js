import React from "react";
import PropTypes from "prop-types";

const Cat = (props) => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Caretaker: {props.caretaker}</h4>
      <h4>Pet count: {props.petCount}</h4>
      <button>Pet Cat</button>
    </li>
  );
};

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  caretaker: PropTypes.string,
  petCount: PropTypes.number,
};

export default Cat;
