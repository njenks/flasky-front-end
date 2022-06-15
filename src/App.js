import Driver from "./components/Driver";
import DriverList from "./components/DriverList";

function App() {
  const drivers = [
    {
      id: 0,
      name: "Yuki Tsunoda",
      team: "Alpha Tauri",
      country: "Japan",
      handsome: true,
    },
    {
      id: 1,
      name: "Carlos Sainz",
      team: null,
      country: "Spain"
    }
  ];
  return (
    <div>
      <DriverList drivers={drivers}/>
    </div>
  );
}

export default App;
