import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  console.log("App rendering");

  const [count, setCount] = useState(0);
  //console.log("setCount", setCount);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const buttonStyle = { backgroundColor: "lightgreen" };
  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      {/* count > 0 или !!count - двойное отрициание  */}
      {count > 0 && (
        <div>
          <button style={buttonStyle} onClick={resetCount}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
