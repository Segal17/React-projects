import "./App.css";
import PetInfo from "./components/PetInfo";

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="2" hasPet={false} />
      <PetInfo animal="dog" age={10} hasPet />
    </div>
  );
}

export default App;
