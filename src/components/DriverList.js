import Driver from "./Driver.js";
import PropTypes from "prop-types";

const DriverList = (props) => {
  // use map instead of using for loop
  // using key instead as well as id whenever we are looping
  // whenever we have a lot of components created in a loop b/c it doesn't know how to map what component was there before
  // in React, key is a special attr to figure out how to map component objs ** really need to do it when looping
  // key is not accessible from props object, but id will be accessible from props obj
  const driverComponents = props.drivers.map((driver) => {
    return (
      <Driver
        key={driver.id}
        id={driver.id}
        name={driver.name}
        team={driver.team}
        cars={driver.cars}
        country={driver.country}
        handsome={driver.handsome}
        handsomeCallback={props.handsomeCallback}
        deleteCallback={props.deleteCallback}
      />
    );
  });
  return (
    <div>
      <h1 className="drivers__header">Drivers</h1>
      {driverComponents}
    </div>
  );
};

DriverList.propTypes = {
  drivers: PropTypes.array.isRequired,
};
export default DriverList;
