import "./App.css";
import CatList from "./components/CatList";

function App() {
  const catData = [
    {
      name: "Whiskers",
      caretaker: "Farah",
    },
    {
      name: "Fang",
      caretaker: "Luciana",
    },
    {
      name: "Beetle",
      caretaker: "Aya",
    },
  ];

  return (
    <main>
      <h1>List of Cats</h1>
      <CatList catData={catData} />
    </main>
  );
}

export default App;
