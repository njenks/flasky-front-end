import React from "react";
import Cat from "./Cat";
import PropTypes from "prop-types";

const CatList = (props) => {

  const catComponents = props.catData.map((cat) => {
    return (
      <Cat name={cat.name} caretaker={cat.caretaker} />
    );
  });
   
  return (
    <section>
      <h2>Cat count: {props.catData.length}</h2>
      <ul>{catComponents}</ul>;
    </section>
  );
};

CatList.propTypes = {
  catData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CatList;
