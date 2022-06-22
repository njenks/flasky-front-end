import "./Driver.css";
import PropTypes from "prop-types";

const Driver = (props) => {
  // access to props.handsomeCallBack
  const flipMyHandsome = () => {
    props.handsomeCallback(props.id);
  };

  const deleteMe = () => {
    props.deleteCallback(props.id);
  };
  return (
    <div>
      <h2 className="driver__name">{props.name}</h2>
      <ul>
        <li>Team: {props.team}</li>
        <li>Country: {props.country}</li>
        <li>Cars: {props.cars}</li>
        {/* Ternary operator to determine status of boolean */}
        <li>Handsome: {props.handsome ? "Hella fine" : "Not for me"}</li>
        <button onClick={flipMyHandsome}>Change Handsomeness</button>
        <button onClick={deleteMe}>Delete</button>
        {/* Set Country
        <input
          type="text"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        ></input> */}
      </ul>
    </div>
  );
};

Driver.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  handsome: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  cars: PropTypes.array.isRequired,
};
export default Driver;
