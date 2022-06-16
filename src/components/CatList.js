import React from "react";
import Cat from "./Cat";
import "./CatList.css";
import PropTypes from 'prop-types';

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

CatList.propTypes = {
  cats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      chipNumber: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CatList;