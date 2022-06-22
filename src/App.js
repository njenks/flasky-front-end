import { useState, useEffect } from "react";
import "./App.css";
import CatList from "./components/CatList";
import axios from "axios";
// import catDataJson from './data/catData.json';

const kBaseUrl = 'http://localhost:5000';

const catApiToJson = cat => {
  const { caretaker, color, id, name, personality, pet_count: petCount } = cat;
  return { caretaker, color, id, name, personality, petCount };
};

const getCats = () => {
  return axios.get(`${kBaseUrl}/cats`) // promise1
  .then(response => {
    return response.data.map(catApiToJson);
  })  // promise 2
  .catch(err => {
    console.log(err);
  })  // promise 3
};

const petCat = id => {
  return axios.patch(`${kBaseUrl}/cats/${id}/pet`) // promise1
  .then(response => {
    return catApiToJson(response.data);
  })  // promise 2
  .catch(err => {
    console.log(err);
  })  // promise 3
};

const removeCat = id => {
  return axios.delete(`${kBaseUrl}/cats/${id}`) // promise1
  .catch(err => {
    console.log(err);
  })  // promise 3
};


function App() {
  const [ catData, setCatData ] = useState([]);

  const updateCats = () => {
    getCats()
    .then(cats => {
      setCatData(cats);
    })
  };

  useEffect(() => {
    updateCats();
  }, []);
  
  const updateCat = (id) => {
    // console.log(`cat id ${id} says purr!`);
    petCat(id)
    .then(updatedCat => {
      setCatData(oldData => {
        return oldData.map(cat => {
          if (cat.id === id) {
            return updatedCat;
          } else {
            return cat;
          }
        });  
      });
    })
  };

  const unregisterCat = id => {
    // console.log(`unregister cat id ${id}`)
    removeCat(id).then(cat => {  
      setCatData(oldData => {
        return oldData.filter(cat => {
          return cat.id !== id;
        });
      });
    });
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
        onPetCat={updateCat} 
        onUnregister={unregisterCat} 
        />
    </main>
  );
}

export default App;
