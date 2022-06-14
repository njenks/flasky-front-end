import Driver from "./Driver";
import PropTypes from "prop-types";

const DriverList = (props) => {
  const driverComponents = props.drivers.map((driver) => {
    return (
      <Driver
        key={driver.id}
        name={driver.name}
        country={driver.country}
        handsome={driver.handsome}
        team={driver.team}
      />
    );
  });

  return (
    <div>
      <h1>Drivers</h1>
      {driverComponents}
    </div>
  );
};

DriverList.propTypes = {
  drivers: PropTypes.array.isRequired,
};

export default DriverList;
