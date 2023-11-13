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
    <article>
      <div className="border-2 border-fourth-color w-72">
        <img src={residentInfo?.image} alt={residentInfo?.name} />
      </div>
      <section className="border-2 border-fourth-color py-4 flex flex-col gap-3 pl-4 w-72">
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
            Times apper:{" "}
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
