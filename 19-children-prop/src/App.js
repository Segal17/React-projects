import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper color="lightgreen">
        <h2>Text inside of the Wrapper</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="lightblue">
        <h2>Another text inside of the Wrapper</h2>
        <p>Some description</p>
        <input type="text" placeholder="Введите значение"></input>
      </Wrapper>
      <Wrapper color="grey">
        <h2>Another text</h2>
        <i>Some description</i>
        <input type="text" placeholder="Введите параметр"></input>
      </Wrapper>
    </div>
  );
}

export default App;
