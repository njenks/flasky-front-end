import { useState } from "react";
import "./App.css";
import CatList from "./components/CatList";
import catDataJson from "./data/catData.json";

const kPersonalities = [
  "Skittish",
  "Outgoing",
  "Confident",
  "Spontaneous",
  "Impulsive",
  "Friendly",
  "Adventurous",
  "Relaxed",
  "Gentle",
  "Playful",
  "Affectionate",
  "Curious",
  "Peaceful",
  "Docile",
  "Sweet",
  "Active",
  "Sociable",
  "Purposeful",
  "Talkative",
  "Determined",
  "Vocal",
  "Loving",
  "Inquisitive",
];

const randint = (max) => {
  return Math.floor(Math.random() * max);
};

const choice = (arr) => {
  return arr[randint(arr.length)]
};

const getRandomPersonality = () => {
  return choice(kPersonalities);
};

function App() {
  const [catData, setCatData] = useState(catDataJson);

  const beACat = id => {
    // slightly dangerous in async cases
    const newCatData = catData.map(cat => {
      if (cat.id === id) {
        return { ...cat, personality: getRandomPersonality() }
      } else {
        return cat;
      }
    });

    setCatData(newCatData);
  };

  const onRemove = id => {
    // slightly dangerous in async cases
    const newCatData = catData.filter(cat => {
      return cat.id !== id;
    });

    setCatData(newCatData);
  };

  return (
    <main>
      <h1>List of Cats</h1>
      <CatList catData={catData} beACat={beACat} onRemove={onRemove} />
    </main>
  );
}

export default App;
