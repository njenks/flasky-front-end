import React from "react";
import PropTypes from "prop-types";

const Cat = (props) => {
  const beACat = () => {
    props.beACat(props.id);
  };

  const onRemove = () => {
    props.onRemove(props.id);
  };

  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Caretaker: {props.caretaker}</h4>
      <h4>Personality: {props.personality}</h4>
      <button onClick={beACat}>Be A Cat</button>
      <button onClick={onRemove}>Unregister</button>
    </li>
  );
};

Cat.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  caretaker: PropTypes.string,
  personality: PropTypes.string.isRequired,
  beACat: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Cat;
