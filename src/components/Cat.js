import React, {useState} from "react";
import PropTypes from "prop-types";

const Cat = (props) => {
  // const [petCount, setPetCount] = useState(0);
 

  // const petCat = () => {
  //   setPetCount(petCount + 1);
  // }

  const handlePet = () => {
    props.onPetCat(props.id);
  };

  const handleUnregister = () => {
    props.onUnregister(props.id);
  };

  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Caretaker: {props.caretaker}</h4>
      <h4>Pet count: {props.petCount}</h4>
      <button onClick={handlePet}>Pet Cat</button>
      <button onClick={handleUnregister}>Unregister</button>
    </li>
  );
};

Cat.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  caretaker: PropTypes.string.isRequired,
  petCount: PropTypes.number.isRequired,
  onPetCat: PropTypes.func.isRequired,
  onUnregister: PropTypes.func.isRequired,
};

export default Cat;
