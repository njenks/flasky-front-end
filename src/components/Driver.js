import "./Driver.css";

const Driver = () => {
  const name = "Yuki Tsunoda";
  const team = "Alpha Tauri";
  const country = "Japan";
  const handsome = true;
  return (
    <div>
      <h2 className="driver__name">{name}</h2>
      <ul>
        <li>Team: {team}</li>
        <li>Country: {country}</li>
        <li>Handsome: {handsome.toString()}</li>
      </ul>
    </div>
  );
};

export default Driver;
