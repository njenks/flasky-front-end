import "./Driver.css";
import PropTypes from "prop-types";

const Driver = (props) => {
  return (
    <div>
      <h2 className="driver__name">{props.name}</h2>
      <ul>
        <li>Team: {props.team}</li>
        <li>Country: {props.country}</li>
        <li>Handsome: {props.handsome.toString()}</li>
      </ul>
    </div>
  );
};

Driver.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  handsome: PropTypes.bool.isRequired,
  something: PropTypes.string.isRequired,
};

export default Driver;
