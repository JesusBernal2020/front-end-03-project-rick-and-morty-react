import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Resident = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => err);
  }, []);

  return (
    <article className="hover:shadow-2xl hover:shadow-fourth-color transition-all ease-in-out border-2 border-fourth-color">
      <div className=" border-2 border-fourth-color object-contain relative">
        <img src={residentInfo?.image} alt={residentInfo?.name} />
        <div className="flex items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 border-2 border-fourth-color bg-primary-color/40 px-4">
          <div className="h-3 aspect-square bg-fourth-color rounded-full"></div>
          <span className="text-second-color">Dead</span>
        </div>
      </div>
      <section className=" py-4 flex flex-col gap-3 pl-4 w-72">
        <h4 className="text-second-color font-bold text-xl">
          {residentInfo?.name}
        </h4>
        <ul className="text-third-color text-sm flex flex-col gap-3">
          <li>
            Species:{" "}
            <span className="text-second-color">{residentInfo?.species}</span>
          </li>
          <li>
            Origin:{" "}
            <span className="text-second-color">
              {residentInfo?.origin.name}
            </span>
          </li>
          <li>
            Times apper:
            <span className="text-second-color">
              {residentInfo?.episode.length}
            </span>
          </li>
        </ul>
      </section>
    </article>
  );
};

Resident.propTypes = {
  residentUrl: PropTypes.string,
};

export default Resident;

// TODO TERMINAR 1:11:38
