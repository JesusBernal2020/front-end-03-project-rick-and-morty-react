import PropTypes from "prop-types";
import "./styles/ResidentList.css";
import Resident from "./Resident";

const ResidentList = ({ residents }) => {
  return (
    <section className="bgList text-fourth-color py-20">
      {/* start Lista de residents */}
      <section className=" flex flex-col gap-8">
        {
          //generas una lista para cada residente
          residents?.map((resident) => (
            <Resident key={resident} residentUrl={resident} />
          ))
        }
      </section>
      {/* end Lista de residents */}
      {/*start paginacion*/}
      {/*end paginacion*/}
    </section>
  );
};

ResidentList.propTypes = {
  residents: PropTypes.array,
};

export default ResidentList;
