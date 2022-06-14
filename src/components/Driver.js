import "./Driver.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Driver = (props) => {
  const [handsome, setHandsome] = useState(props.handsome);

  return (
    <div>
      <h2 className="driver__name">{props.name}</h2>
      <ul>
        <li>Team: {props.team}</li>
        <li>Country: {props.country}</li>
        <li>Handsome: {handsome.toString()}</li>
      </ul>
      <button
        onClick={(e) => {
          console.log(e);
          setHandsome(!handsome);
        }}
      >
        Change attractiveness
      </button>
      <button>Delete</button>
    </div>
  );
};

Driver.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  handsome: PropTypes.bool.isRequired,
};

export default Driver;
