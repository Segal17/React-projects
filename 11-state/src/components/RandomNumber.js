import { useState } from "react";
import generateRandomNum from "../utils/generateRandomNum";

function RandomNumber(props) {
  console.log("rendered");
  const { maxNum } = props;
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum));
  const changeRandomNum = () => {
    setRandomNum(generateRandomNum(maxNum));
    console.log(randomNum);
  };
  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate number</button>
    </div>
  );
}

export default RandomNumber;
