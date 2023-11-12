import "./App.css";
import Location from "./components/Location";

function App() {
  //numero aleatorio 0 => 0.999999999
  Math.floor(Math.random() * 126);
  return (
    <main>
      <Location />
    </main>
  );
}

export default App;
