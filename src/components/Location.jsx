import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";

const Location = ({ location, setLocation }) => {
  const [locationSearch, setLocationSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios
      .get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };

  /* const handleSearchLocation = (e) => {
    setLocationSearch(e.target.value);
  }; */

  const handleSearchLocation = (e) => {
    const searchTerm = e.target.value;
    setLocationSearch(searchTerm);

    const URL_SEARCH = `https://rickandmortyapi.com/api/location/?name=${searchTerm}`;

    axios
      .get(URL_SEARCH)
      .then(({ data }) => {
        const newLocation = data.results || [];
        setSearchResults(newLocation);
      })
      .catch((err) => console.error(err));
  };

  const handleSelectLocation = (selectedLocation) => {
    setLocation(selectedLocation);
    setLocationSearch(selectedLocation.name);
    setSearchResults([]); // Limpiar los resultados después de seleccionar
  };

  if (!location) {
    return (
      <div className="text-center">
        <p>No se encontró la ubicación</p>
      </div>
    );
  }

  /* useEffect(() => {
    if (!locationSearch) {
      return; // Evitar la llamada si locationSearch está vacío
    }

    const URL_SEARCH = `https://rickandmortyapi.com/api/location/?name=${locationSearch}`;

    axios
      .get(URL_SEARCH)
      .then(({ data }) => {
        const newLocation = data.results;
        const newLocation2 = newLocation.find((nameLocation) =>
          nameLocation.name.includes(locationSearch)
        );
        console.log(newLocation);
        setLocation(newLocation2 || null); // Usar null si no se encuentra ninguna ubicación
      })
      .catch((err) => console.error(err));
  }, [locationSearch, setLocation]);

  if (!location) {
    return (
      <div className="text-center">
        <p>No se encontró la ubicación</p>
      </div>
    );
  } */

  /*  useEffect(() => {
    const URL_SEARCH = `https://rickandmortyapi.com/api/location/?name=${locationSearch}`;

    axios
      .get(URL_SEARCH)
      .then(({ data }) => {
        const newLocation = data.results;
        let newLocation2;
        for (const nameLocation of newLocation) {
          newLocation2 = nameLocation.name.includes(locationSearch);
        }
        console.log(newLocation);
        setLocation(newLocation2);
      })
      .catch((err) => err);
  }, [locationSearch]); */

  return (
    <section className="bgSpace font-firaCode text-fourth-color flex flex-col items-center gap-10">
      {/*start hero portal */}
      <div className="flex flex-col items-center p-2">
        <div className="w-[250px] sm:w-[360px] relative">
          <img
            className="portal drop-shadow-[2px_2px_50px_#8EFF8B]"
            src="/images/portal-r-m.png"
            alt=""
          />
          <img
            className="absolute bottom-24 w-auto sm:bottom-32"
            src="/images/name.png"
            alt=""
          />
        </div>
      </div>
      {/*end hero portal */}
      {/*start location */}
      <article className="flex flex-col items-cente justify-center gap-8 px-3">
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            id="newLocation"
            value={locationSearch}
            onChange={handleSearchLocation}
            className=" w-60 bg-primary-color/30 border-solid border-2 border-fourth-color outline-none px-2 sm:w-96"
            placeholder="Type a location Id..."
            type="text"
          />
          {searchResults.length > 0 && locationSearch !== "" && (
            <ul className="absolute z-10 bg-primary-color w-60 border border-fourth-color mt-1">
              {searchResults.map((result) => (
                <li
                  key={result.id}
                  className="cursor-pointer p-2 hover:bg-gray-200"
                  onClick={() => handleSelectLocation(result)}
                >
                  {result.name}
                </li>
              ))}
            </ul>
          )}
          <button className="bg-fourth-color/40  border-solid border-2 border-fourth-color p-2 sm:flex sm:gap-3 sm:px-5">
            <span className="hidden sm:block">Search</span>
            <span className="text-xl px-2">
              <i className="bx bx-search"></i>
            </span>
          </button>
        </form>
        <section className="border-2 border-fourth-color py-6 px-3 md:w-[700px] lg:w-[900px]">
          <h1 className="text-center text-lg pb-7">
            ¡Welcome to {location?.name}!
          </h1>
          <div className="flex flex-col items-center justify-center px-2 gap-7 sm:gap-5 sm:flex-row lg:gap-10 text-center">
            <span className="text-third-color">Type: {location?.type}</span>
            <span className="text-third-color">
              Dimension: {location?.dimension}
            </span>
            <span className="text-third-color">
              Population: {location?.residents.length}
            </span>
          </div>
        </section>
      </article>
      {/*end location */}
    </section>
  );
};

Location.propTypes = {
  location: PropTypes.object,
  setLocation: PropTypes.func,
};

export default Location;
