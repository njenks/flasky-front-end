import React from "react";
import Cat from "./Cat";
import "./CatList.css";
import PropTypes from 'prop-types';

const CatList = (props) => {
  //props is going to be an array of objects and a function
  const catComponentsArray = props.catData.map((cat) => {
    return (
      <Cat
      //id can be used for key and id props because id is unique to each cat object
      key={cat.id}
      id={cat.id}
      color={cat.color}
      personality={cat.personality}
      name={cat.name}
      onRemove={props.onRemove}
      caretaker={cat.caretaker}
      />
    )
  })
  return (
    <section>
      <h1>Our Cats!</h1>
      <h2>Cat Count: {props.catData.length}</h2>
      <ul>{catComponentsArray}</ul>
    </section>
  );
}

CatList.propTypes = {
  catData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func.isRequired
};

export default CatList;