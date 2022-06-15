import './App.css';
import { CatList } from './components/CatList';

const catData = [
  {
    name: "Whiskers",
    chipNumber: "13579",
  },
  {
    name: "Fang",
    chipNumber: "82672",
  },
  {
    name: "Beetle",
    chipNumber: "02468",
  },
  {
    name: "Loki",
    chipNumber: "3454353",
  },
  {
    name: "Elvis",
    chipNumber: "",
  }
];

// dog data object to use for roundtable activity
// const dogData = [
//   {
//     name: "Wishbone",
//     favoriteToy: "Squeaker",
//     chipNumber: "82373",
//   },
//   {
//     name: "Appa",
//     favoriteToy: "Ball",
//     chipNumber: "29238",
//   },
//   {
//     name: "Jimminy",
//     favoriteToy: "Bone",
//     chipNumber: "72902",
//   }
// ];


function App() {
  return (
    <main>
      <h1>The Cat Corral</h1>
      <CatList cats={catData}></CatList>
    </main>
  );
}

export default App;
