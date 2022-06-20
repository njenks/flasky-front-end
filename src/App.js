import { useEffect, useState } from "react";
import "./App.css";
import CatList from "./components/CatList";
import axios from "axios";

const kBaseURL = 'http://localhost:5000';

const calcTotalPets = (catData) => {
  return catData.reduce((total, cat) => {
    return total + cat.petCount;
  }, 0);
};

const catJsonToState = (json) => {
  const { id, name, color, personality, pet_count: petCount, caretaker } = json;
  return { id, name, color, personality, petCount, caretaker };
};

const getAllCats = () => {
  return axios.get(`${kBaseURL}/cats`)
    .then(response => {
      return response.data.map(catJsonToState);
    })
    .catch(error => {
      console.log(error);
      throw new Error('error getting cat data!');
    });
};

const petCat = id => {
  return axios.patch(`${kBaseURL}/cats/${id}/pet`)
    .then(response => {
      // console.log(response);
      return catJsonToState(response.data);
    })
    .catch(error => {
      console.log(error);
      throw new Error(`error petting cat ${id}`);
    });
};

const deleteCat = id => {
  return axios.delete(`${kBaseURL}/cats/${id}`)
    .catch(error => {
      console.log(error);
      throw new Error(`error deleting cat ${id}`);
    });
};

function App() {
  const [catData, setCatData] = useState([]);
  const [status, setStatus] = useState('');

  const onPetCat = id => {
    setStatus('');
    return petCat(id)
      .then(updatedCat => {
        setCatData(oldCatData => {
          return oldCatData.map(cat => {
            if (cat.id === updatedCat.id) {
              return updatedCat;
            } else {
              return cat;
            }
          });        
        });
      })
      .catch(err => {
        setStatus(err.message);
      });
  };

  const onRemoveCat = id => {
    setStatus('');
    return deleteCat(id)
      .then(() => {
        setCatData(oldCatData => {
          return oldCatData.filter(cat => {
            return cat.id !== id;
          });        
        });
      })
      .catch(err => {
        setStatus(err.message);
      });
  };

  const refreshCats = () => {
    setStatus('');
    return getAllCats()
      .then((cats) => {
        setCatData(cats);
      })
      .catch(err => {
        setStatus(err.message);
      });
  };

  const totalPets = calcTotalPets(catData);

  useEffect(() => {
    refreshCats();
  }, []);

  return (
    <main>
      <h1>List of Cats</h1>
      <div className="statusMessage">{status}</div>
      <CatList catData={catData} totalPets={totalPets} onPetCat={onPetCat} onRemoveCat={onRemoveCat} />
      {/* <CatList {...{catData, totalPets, onPetCat, onRemoveCat}} /> */}
    </main>
  );
}

export default App;
