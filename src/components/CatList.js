import React from "react";
import Cat from "./Cat";
import PropTypes from "prop-types";

const CatList = (props) => {
  const catComponents = props.catData.map((cat) => {
    // const { onPetCat: onPet, onRemoveCat: onRemove } = props;
    // return <Cat key={cat.id} {...{...cat, onPet, onRemove}} />

    return (
      <Cat 
        key={cat.id}
        id={cat.id}
        name={cat.name} 
        caretaker={cat.caretaker} 
        petCount={cat.petCount} 
        onPet={props.onPetCat}
        onRemove={props.onRemoveCat}
        />
    );
  });

  return (
    <section>
      <h2>
        <div>Cat count: {props.catData.length}</div>
        <div>Total pets: {props.totalPets}</div>
      </h2>
      <ul>{catComponents}</ul>
    </section>
  );
};

CatList.propTypes = {
  catData: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalPets: PropTypes.number.isRequired,
  onPetCat: PropTypes.func.isRequired,
  onRemoveCat: PropTypes.func.isRequired,
};

export default CatList;
