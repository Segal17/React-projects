import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(null);
  console.log("app rendering");

  fetch("https://jsonplaceholder.typicode.com/todos/5")
    .then((response) => response.json())
    .then((json) => setTodo(json)); //console.log(json));

  return <div className="App"></div>;
}

export default App;
