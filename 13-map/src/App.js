import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

const texts = ["btn11", "btn22", "btn33", "btn44", "btn55"];

function App() {
  console.log("App rendering");

  const [count, setCount] = useState(0);
  //console.log("setCount", setCount);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text) => {
        return <Button onClick={incrementCount} text={text} key={text} />;
      })}

      {/* <Button onClick={incrementCount} text={texts[0]} />
      <Button onClick={incrementCount} text={texts[1]} />
      <Button onClick={incrementCount} text={texts[2]} />
      <Button onClick={incrementCount} text={texts[3]} /> */}
    </div>
  );
}

export default App;
