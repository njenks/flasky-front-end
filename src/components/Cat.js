import "./Cat.css";
import PropTypes from "prop-types";


const Cat = (props) => {
  const catName = props.name;
  const catSaying = props.saying;
  const catAge = props.age;
  const catColor = props.color;
  return (
    <div className="rainbow-box">
      <h3> {catName} </h3>
      <p> {catSaying} </p>
      <p> {catAge}</p>
      <p> {catColor}</p>
    </div>
  );
};
Cat.propTypes = {
    name:PropTypes.string.isRequired,
    saying:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
}

export default Cat;
