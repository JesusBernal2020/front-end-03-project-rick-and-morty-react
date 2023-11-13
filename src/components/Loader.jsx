import "./styles/Loader.css";

const Loader = () => {
  return (
    <section className="min-h-screen flex flex-col bg-black">
      <div className="loader">
        <div className="head"></div>

        <div className="flames">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="eye"></div>
      </div>
    </section>
  );
};

export default Loader;
