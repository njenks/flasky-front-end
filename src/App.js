import { useState } from "react";
import DriverList from "./components/DriverList";

function App() {
  const [drivers, setDrivers] = useState([
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
      team: "Ferrari",
      country: "Spain",
      handsome: true,
    },
  ]);

  const flipHandsome = (id) => {
    // const newDrivers = [];
    // for (const driver of drivers) {
    //   if (driver.id === id) {
    //     driver.handsome = !driver.handsome;
    //   }
    //   newDrivers.push(driver);
    // }
    // setDrivers(newDrivers);
    for (const driver of drivers) {
      if (driver.id === id) {
        driver.handsome = !driver.handsome;
      }
    }
    const newDrivers = [...drivers];
    setDrivers(newDrivers);
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
  /*
  class Vendor
    ......

  auberon = Vendor(price=6)
  */
  return (
    <div>
      <DriverList
        drivers={drivers}
        handsomeCallback={flipHandsome}
        deleteCallback={deleteDriver}
      />
    </div>
  );
}

export default App;
