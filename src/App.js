import { useState } from "react";
import "./App.css";
import CatList from "./components/CatList";
import catDataJson from "./data/catData.json";

const calcTotalPets = (catData) => {
  return catData.reduce((total, cat) => {
    return total + cat.petCount;
  }, 0);
};

function App() {
  const [ catData, setCatData ] = useState(catDataJson);

  const onPetCat = id => {
    // slightly dangerous in async cases
    const newCatData = catData.map(cat => {
      if (cat.id === id) {
        return { ...cat, petCount: cat.petCount + 1 }
      } else {
        return cat;
      }
    });

    setCatData(newCatData);
  };

  const onRemoveCat = id => {
    // slightly dangerous in async cases
    const newCatData = catData.filter(cat => {
      return cat.id !== id;
    });

    setCatData(newCatData);
  };

  const totalPets = calcTotalPets(catData);

  return (
    <main>
      <h1>List of Cats</h1>
      <CatList catData={catData} totalPets={totalPets} onPetCat={onPetCat} onRemoveCat={onRemoveCat} />
      {/* <CatList {...{catData, totalPets, onPetCat, onRemoveCat}} /> */}
    </main>
  );
}

export default App;
