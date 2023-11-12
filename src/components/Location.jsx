import PropTypes from "prop-types";

const Location = ({ location }) => {
  return (
    <section className="bgSpace font-firaCode text-fourth-color flex flex-col items-center gap-10">
      {/*start hero portal */}
      <div className="flex flex-col items-center p-2">
        <div className="w-[250px] sm:w-[360px] relative">
          <img className="portal" src="/public/images/portal-r-m.png" alt="" />
          <img
            className="absolute bottom-24 w-auto sm:bottom-32"
            src="/public/images/name.png"
            alt=""
          />
        </div>
      </div>
      {/*end hero portal */}
      {/*start location */}
      <article className="flex flex-col items-cente justify-center gap-8 px-3">
        <form className="flex justify-center">
          <input
            className=" w-60 bg-primary-color/30 border-solid border-2 border-fourth-color outline-none px-2 sm:w-96"
            placeholder="Type a location Id..."
            type="text"
          />
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
};

export default Location;
