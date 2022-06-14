import "./App.css";
import DriverList from "./components/DriverList";

function App() {
  const drivers = [
    {
      id: 7,
      name: "Yuki Tsunoda!!!",
      team: "Alpha Tauri",
      country: "Japan",
      handsome: true,
    },
    {
      id: 22,
      name: "Lewis Hamilton",
      team: "Mercedes",
      country: "UK",
      handsome: true,
    },
  ];
  return (
    <div>
      <DriverList drivers={drivers}></DriverList>
    </div>
  );
}

export default App;
