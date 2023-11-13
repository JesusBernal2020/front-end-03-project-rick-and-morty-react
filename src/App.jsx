import "./App.css";
import { useEffect, useState } from "react";
import Location from "./components/Location";
import { getRandomDimension } from "./utils/random";
import axios from "axios";
import ResidentList from "./components/ResidentList";
import Loader from "./components/Loader";

function App() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;

    axios
      .get(URL)
      .then(({ data }) => {
        // Simula un retraso para asegurar que el Loader sea visible
        setTimeout(() => {
          setLocation(data);
          setLoading(false); // Marcar la carga como completa
        }, 2000); // Puedes ajustar el tiempo según tus necesidades
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Marcar la carga como completa incluso en caso de error
      });
  }, []);

  return (
    <main className="font-firaCode">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Location location={location} setLocation={setLocation} />
          <ResidentList residents={location?.residents} location={location} />
        </>
      )}
    </main>
  );
}

export default App;
