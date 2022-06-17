import './App.css';
import { CatList } from './components/CatList';
import catData from "./data/catData.json";

// Moved Cat and Dog data into 'data' folder

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



function App() {
  return (
    <main>
      <h1>The Cat Corral</h1>
      <CatList cats={catData}></CatList>
    </main>
  );
}

export default App;
