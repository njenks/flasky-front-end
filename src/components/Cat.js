import "./Cat.css";
import PropTypes from "prop-types";
import {useState} from "react";

const Cat = (props) => {

    const [catAge, setCatAge] = useState(props.age);
    const [catSaying, setCatSaying] = useState(props.saying);

    const catName = props.name;
    const catColor = props.color;
    const makeCatOlder = () => {
        setCatAge(catAge + 1);
    };

    const changeCatSaying = (event) => {
        let newSaying = event.target.value;
        if(newSaying === "") {
            newSaying = "Hello!"
        }
        setCatSaying(newSaying)
    }
    return (
    <div className="rainbow-box">
      <h3> {catName} </h3>
      <p> {catSaying} </p>
      <p> Change Saying: <input type="text" onChange={changeCatSaying} /></p>
      <p> {catAge} <button onClick={makeCatOlder}>🙀</button></p>
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
