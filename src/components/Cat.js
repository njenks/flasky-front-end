import { React, useState } from "react";
import PropTypes from 'prop-types';
import "./Cat.css";

const Cat = ({ name, chipNum }) => {
  const [chip, setChip] = useState(chipNum);

  const getRndChipNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const createChip = () => {
    setChip(getRndChipNumber(1000, 9999));
  }

  return (
    <li>
      <h3>{name}</h3>
      {chip ? (<span>Chip #: {chip}</span>) : (<button onClick={createChip}>add chip</button>)}
    </li>
  );
};

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  chipNum: PropTypes.string.isRequired
};

export default Cat;
