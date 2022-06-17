import React from "react";
import Cat from "./Cat";
import PropTypes from "prop-types";

const CatList = (props) => {
  const catComponents = props.catData.map((cat) => {
    return (
      <Cat 
        key={cat.id}
        id={cat.id}
        name={cat.name} 
        caretaker={cat.caretaker} 
        petCount={cat.petCount} 
        onPetCat={props.onPetCat}
        onUnregister={props.onUnregister}
        />
    );
  });

  return (
    <section>
      <h2>Cat count: {props.catData.length}</h2>
      <ul>{catComponents}</ul>
    </section>
  );
};

CatList.propTypes = {
  catData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onPetCat: PropTypes.func.isRequired,
  onUnregister: PropTypes.func.isRequired,
};

export default CatList;
