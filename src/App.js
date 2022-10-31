import { useState } from "react";
import "./App.css";
import Direction from "./components/Direction";
import MyLocation from "./components/MyLocation";

function App() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const displayDirection = (event) => {
    event.preventDefault();
    const start = event.target.origin.value;
    const destination = event.target.destination.value;

    setOrigin(start);
    setDestination(destination);
  };

  return (
    <div className="">
      <form onSubmit={displayDirection}>
        <input type="text" name="origin" required />
        <input type="text" name="destination" required />
        <input type="submit" value="show direction" />
      </form>
      <Direction origin={origin} destination={destination}></Direction>
      {/* <MyLocation></MyLocation> */}
    </div>
  );
}

export default App;
