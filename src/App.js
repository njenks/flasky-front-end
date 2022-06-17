import './App.css';
import React, {useState} from 'react';
import CatList from './components/CatList';
import catData from "./data/catData.json";

// Moved Cat and Dog data into 'data' folder



function App() {

  const [cats, setCats] = useState(catData);

  const onRemove = (id) => {
    //this will alter cat data based on cat's id
    const newCats = cats.filter((cat) => {
      //we only want to add the cat to the array if it's id does not equal the id of the cat we want to remove
      return cat.id !== id;
    });
    //newCats holds our new array of cats
    setCats(newCats);
  }
  
  return (
    <main>
      <h1>The Cat Corral</h1>
      <CatList catData={cats} onRemove={onRemove}></CatList>
    </main>
  );
}

export default App;
