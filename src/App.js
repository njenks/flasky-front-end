import { useState } from "react";
import "./App.css";
import CatList from "./components/CatList";
import catDataJson from './data/catData.json';

function App() {
  const [ catData, setCatData ] = useState(catDataJson);
  
  const petCat = (id) => {
    // console.log(`cat id ${id} says purr!`);
    const newCatData = catData.map(cat => {
      if (cat.id === id) {
        return { ...cat, petCount: cat.petCount + 1 }
      } else {
        return cat;
      }
    });

    setCatData(newCatData);
  };

  const unregisterCat = id => {
    // console.log(`unregister cat id ${id}`)
    const newCatData = catData.filter(cat => {
      return cat.id !== id;
    });

    setCatData(newCatData);
  };

  const totalPets = catData.reduce((total, cat) => {
    return total + cat.petCount;
  }, 0);

  return (
    <main>
      <h1>
        <div>List of Cats</div>
        <div>Total pets: {totalPets}</div>
      </h1>
      <CatList 
        catData={catData} 
        onPetCat={petCat} 
        onUnregister={unregisterCat} 
        />
    </main>
  );
}

export default App;
