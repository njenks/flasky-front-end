import "./App.css";
import CatList from "./components/CatList";
import Cat from "./components/Cat";
import { useState } from "react";

function App() {
  const [placeholder, setPlaceholder] = useState("Hello");

  const catData1 = [
    {
      id: 1,
      name: "Jeff THEE Cat",
      saying: "rainbows 5evah",
      age: 5,
      color: "tabby",
    },
    { id: 2, name: "Lily", saying: "cry", age: 5, color: "tabby" },
    { id: 3, name: "Richard", saying: "food", age: 5, color: "tabby" },
    { id: 4, name: "Prince", saying: "meow", age: 5, color: "tuxedo" },
  ];

  // const catData2 = [
  //   { id: 3, name: "Richard", saying: "food", age: 5, color: "tabby" },
  //   { id: 4, name: "Prince", saying: "meow", age: 5, color: "tuxedo" },
  // ];

  const [cats, setCats] = useState(catData1);

  const handleAppClick = () => {
    setPlaceholder(placeholder + "!");
  };

  const setCatAge = (id) => {
    const newCats = cats.map((cat) => {
      if (cat.id === id) {
        return {
          ...cat,
          age: cat.age + 1,
        };
      }
      return cat;
    });
    setCats(newCats);
  };

  const deleteCat = (id) => {
    const newCats = cats.filter((cat) => cat.id !== id);
    setCats(newCats);
  };

  const setCatSaying = (newSaying, id) => {
    const newCats = cats.map((cat) => {
      if (cat.id === id) {
        return {
          ...cat,
          saying: newSaying,
        };
      }
      return cat;
    });
    setCats(newCats);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Otters Flasky </h1>
      </header>
      <button onClick={handleAppClick}>{placeholder}</button>
      <main>
        <CatList
          catData={cats}
          setCatAgeCallback={setCatAge}
          deleteCatCallback={deleteCat}
          setCatSayingCallback={setCatSaying}
        />
        {/* <CatList catData={catData2} /> */}
      </main>
    </div>
  );
}

export default App;
