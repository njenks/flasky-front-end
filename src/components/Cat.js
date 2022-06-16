import React, {useState} from "react";
import PropTypes from "prop-types";

const Cat = (props) => {

  const [petCount, setPetCount] = useState(0);

  const petCat = () => {
    setPetCount(petCount + 1);
  }
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Caretaker: {props.caretaker}</h4>
      <h4>Pet count: {petCount}</h4>
      <button onClick={petCat}>Pet Cat</button>
    </li>
  );
};

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  caretaker: PropTypes.string,
  petCount: PropTypes.number,
};

export default Cat;
