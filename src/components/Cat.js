import React from "react";
import PropTypes from "prop-types";

const Cat = (props) => {
  const petCat = () => {
    props.onPet(props.id);
  }

  const removeCat = () => {
    props.onRemove(props.id);
  }

  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Caretaker: {props.caretaker}</h4>
      <h4>Pet count: {props.petCount}</h4>
      <button onClick={petCat}>Pet Cat</button>
      <button onClick={removeCat}>Unregister</button>
    </li>
  );
};

Cat.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  caretaker: PropTypes.string,
  onPet: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Cat;
