import "./Cat.css";
import PropTypes from "prop-types";

const Cat = ({
  id,
  name,
  saying,
  color,
  age,
  setCatAgeCallback,
  deleteCatCallback,
  setCatSayingCallback,
}) => {
  const catName = name;
  const catColor = color;
  const catSaying = saying;

  const changeCatSaying = (event, id) => {
    let newSaying = event.target.value;
    if (newSaying === "") {
      newSaying = "Hello!";
    }
    setCatSayingCallback(newSaying, id);
  };

  return (
    <div className="rainbow-box">
      <h3> {catName} </h3>
      {catSaying}
      <p>
        {" "}
        Change Saying:{" "}
        <input type="text" onChange={(event) => changeCatSaying(event, id)} />
      </p>
      <p>
        {" "}
        {age} <button onClick={() => setCatAgeCallback(id)}>🙀</button>
      </p>
      <p> {catColor}</p>
      <button onClick={() => deleteCatCallback(id)}>Delete Cat</button>
    </div>
  );
};
Cat.propTypes = {
  name: PropTypes.string.isRequired,
  saying: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  setCatAgeCallback: PropTypes.func.isRequired,
  deleteCatCallback: PropTypes.func.isRequired,
};

export default Cat;
