import "./Driver.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Driver = (props) => {
  const [handsome, setHandsome] = useState(props.handsome);
  const [country, setCountry] = useState(props.country);
  const flipHandsomeness = () => {
    if (handsome) {
      //handsome = false; // NO
      setHandsome(false);
    } else {
      setHandsome(true);
    }
  };

  const changeCountryName = (event) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <h2 className="driver__name">{props.name}</h2>
      <ul>
        <li>Team: {props.team}</li>
        <li>Country: {country}</li>
        <li>Handsome: {handsome ? "Hella fine" : "Not for me"}</li>
        <button onClick={flipHandsomeness}>Change Handsomeness</button>
        Set Country
        <input type="text" value={country} onChange={changeCountryName}></input>
      </ul>
    </div>
  );
};

Driver.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string,
  country: PropTypes.string.isRequired,
  handsome: PropTypes.bool,
};

export default Driver;
