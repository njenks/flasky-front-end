import { useEffect, useState } from "react";
import DriverList from "./components/DriverList";
import axios from "axios";

const URL = 'http://localhost:5000/drivers';

function App() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        const newDrivers = res.data.map((driver) => {
          return {
            id: driver.id,
            name: driver.name,
            country: driver.country,
            team: driver.team,
            cars: driver.cars,
            handsome: driver.handsome
          };
        });
        setDrivers(newDrivers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const flipHandsome = (id) => {
    for (const driver of drivers) {
      if (driver.id === id) {
        driver.handsome = !driver.handsome;
      }
    }
    const newDrivers = [...drivers];
    axios
          .patch(`${URL}/${id}/fliphandsome`)
          .then(() => setDrivers(newDrivers))
          .catch((err) => console.log(err));
  };

  const deleteDriver = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        const newDrivers = drivers.filter((driver) => driver.id !== id);
        setDrivers(newDrivers);
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  
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
