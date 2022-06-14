import "./Driver.css";

function Driver() {
  const tsunoda = {
    name: "Yuki Tsunoda",
    team: "Alpha Tauri",
    country: "Japan",
    handsome: true,
  };
  return (
    <div>
      <h2 className="driver__name">{tsunoda.name}</h2>
      <ul>
        <li>Team: {tsunoda.team}</li>
        <li>Country: {tsunoda.country}</li>
        <li>Handsome: {tsunoda.handsome ? "Hella fine" : "Not for me"}</li>
      </ul>
    </div>
  );
}

export default Driver;
