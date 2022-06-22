import { useState } from "react";
import DriverList from "./components/DriverList";
// import axios from "axios";

function App() {
  const [drivers, setDrivers] = useState([
    {
      id: 0,
      name: "Yuki Tsunoda",
      team: "Alpha Tauri",
      country: "Japan",
      handsome: true,
      cars: [],
    },
    {
      id: 1,
      name: "Carlos Sainz",
      team: "Ferrari",
      country: "Spain",
      handsome: true,
      cars: [],
    },
  ]);

  // everytime we call this function, we create a new list
  //
  const flipHandsome = (id) => {
    const newDrivers = [];
    for (const driver of drivers) {
      const newDriver = { ...driver };
      if (newDriver.id === id) {
        newDriver.handsome = !newDriver.handsome; // flipping - if it's F make it a T, if it's a T make it F
      }
      newDrivers.push(newDriver);
    }
    setDrivers(newDrivers); //useState set to newDrivers array
  };

  const deleteDriver = (id) => {
    const newDrivers = [];
    for (const driver of drivers) {
      if (driver.id !== id) {
        newDrivers.push(driver);
      }
    }
    setDrivers(newDrivers);
  };

  return (
    <div>
      {/*Kind of like a constructor same as natascha = Vendor(prices=6)*/}
      <DriverList
        drivers={drivers}
        handsomeCallback={flipHandsome}
        deleteCallback={deleteDriver}
      />
      {/* making a new instance of driverlist component*/}
    </div>
  );
}

export default App;
