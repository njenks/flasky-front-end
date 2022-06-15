import "./Driver.css";
import PropTypes from "prop-types";

const Driver = (props) => {
  return (
    <div>
      <h2 className="driver__name">{props.name}</h2>
      <ul>
        <li>Team: {props.team}</li>
        <li>Country: {props.country}</li>
        <li>Handsome: {props.handsome ? "Hella fine" : "Not for me"}</li>
      </ul>
    </div>
  );
};

Driver.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string,
  country: PropTypes.string.isRequired,
  handsome: PropTypes.bool
}


export default Driver;
