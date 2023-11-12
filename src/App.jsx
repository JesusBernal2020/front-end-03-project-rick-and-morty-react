import "./App.css";
import { useEffect, useState } from "react";
import Location from "./components/Location";
import { getRandomDimension } from "./utils/random";
import axios from "axios";
import ResidentList from "./components/ResidentList";

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;

    axios
      .get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <Location location={location} />
      <ResidentList />
    </main>
  );
}

export default App;
