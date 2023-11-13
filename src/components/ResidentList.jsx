import PropTypes from "prop-types";
import "./styles/ResidentList.css";
import Resident from "./Resident";
import { useEffect, useState } from "react";
import { paginationLogic } from "../utils/pagination";

const ResidentList = ({ residents, location }) => {
  const FIRST_PAGE = 1;
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);

  const { pages, residentsInPage } = paginationLogic(currentPage, residents);

  useEffect(() => {
    setCurrentPage(FIRST_PAGE);
  }, [location]);

  return (
    <section className="bgList text-fourth-color py-20">
      {/* start Lista de residents */}
      <section className="grid gap-10  grid-cols-[repeat(auto-fill,_288px)] justify-center max-w-[1024px] mx-auto">
        {
          //generas una lista para cada residente
          residentsInPage?.map((resident) => (
            <Resident key={resident} residentUrl={resident} />
          ))
        }
      </section>
      {/* end Lista de residents */}
      {/*start paginacion*/}
      <section className="flex justify-center gap-4 flex-wrap p-8">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={` py-3 px-4 text-white ${
              currentPage === page ? "bg-fifthen-color" : "bg-primary-color/5"
            }`}
          >
            {page}
          </button>
        ))}
      </section>
      {/*end paginacion*/}
    </section>
  );
};

ResidentList.propTypes = {
  residents: PropTypes.array,
  location: PropTypes.object,
};

export default ResidentList;
