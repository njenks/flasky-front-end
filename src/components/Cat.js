import React from "react";
import PropTypes from 'prop-types';
import "./Cat.css";

const Cat = ({name, caretaker, id, personality, color, onRemove}) => {

  const onRemoveFunc = () => {
    //this is a prop that equals a function
    onRemove(id)
  }
  
  return (
    <li>
      <h3>{name}</h3>
      <h3>{color}</h3>
      <h3>{caretaker}</h3>
      <h3>{personality}</h3>
      
      <button onClick={onRemoveFunc}>Remove Cat</button>
    </li>
  );
};


Cat.propTypes = {
  caretaker: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  personality: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Cat;
