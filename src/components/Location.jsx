const Location = () => {
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
      <article className="flex flex-col items-cente justify-center gap-8">
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
        <section className="border-2 border-fourth-color py-6 md:w-[650px] lg:w-[800px]">
          <h1 className="text-center text-lg pb-7">
            ¡Welcome to Name Location!
          </h1>
          <div className="flex flex-col items-center justify-center gap-7 sm:flex-row lg:gap-20">
            <span className="text-third-color">Type: Closer</span>
            <span className="text-third-color">Dimension: Unknwq</span>
            <span className="text-third-color">Population: 1</span>
          </div>
        </section>
      </article>
      {/*end location */}
    </section>
  );
};

export default Location;
