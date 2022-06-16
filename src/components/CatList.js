import "./CatList.css";
import Cat from "./Cat.js";
import PropTypes from "prop-types";

const CatList = ({
  catData,
  setCatAgeCallback,
  deleteCatCallback,
  setCatSayingCallback,
}) => {
  //console.log("catlist props: ", props)
  //const catData = props.catData;
  console.log("catData: ", catData);
  //const catComponents = [];

  /*for(const cat of catData) {s
        catComponents.push(<Cat key={cat.id} id={cat.id} name={cat.name} saying={cat.saying} 
            age={cat.age} color={cat.color} />);
    }*/
  const catComponents = catData.map((cat) => (
    <Cat
      key={cat.id}
      id={cat.id}
      name={cat.name}
      saying={cat.saying}
      age={cat.age}
      color={cat.color}
      setCatAgeCallback={setCatAgeCallback}
      deleteCatCallback={deleteCatCallback}
      setCatSayingCallback={setCatSayingCallback}
    />
  ));

  return (
    <div>
      <h2 className="catList"> Super Amazing List of Cutie Cats </h2>
      {catComponents}
    </div>
  );
};

CatList.propTypes = {
  catData: PropTypes.array.isRequired,
};

export default CatList;
