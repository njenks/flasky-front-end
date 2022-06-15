import "./App.css";
import CatList from "./components/CatList";
import Cat from "./components/Cat";

function App() {
    const catData1 = [
        {id:1, name:"Jeff THEE Cat", saying:"rainbows 5evah", age:5, color:"tabby"},
        {"id":2, "name":"Lily", "saying":"cry", "age":5, "color":"tabby"},
        {"id":3, "name":"Richard", "saying":"food", "age":5, "color":"tabby"},
        {"id":4, "name":"Prince", "saying":"meow", "age":5, "color":"tuxedo"},
    ];
    const catData2 = [
        {"id":3, "name":"Richard", "saying":"food", "age":5, "color":"tabby"},
        {"id":4, "name":"Prince", "saying":"meow", "age":5, "color":"tuxedo"},
    ]

  return (
    <div className="App">
      <header className="App-header">
        <h1> Otters Flasky </h1>
      </header>
      <main>
        <CatList catData={catData1}/>
        <CatList catData={catData2} />

      </main>
    </div>
  );
}

export default App;
