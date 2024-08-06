import { useState } from "react";
import { evaluate } from "mathjs";

import Button from "./components/Button";
import Input from "./components/Input";

import "./styles/calc.scss";

function App() {
  const [input, setInput] = useState("");

  const buttonOpt = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "+"],
    ["^", "0", ".", "-"],
  ];

  function handleOpClick(val) {
    setInput((prevInput) => prevInput + val);
  }
  function handleClearClick() {
    setInput("");
  }

  function handleEqualClick() {
    setInput((prevInput) => evaluate(prevInput));
  }

  function renderButtons() {
    return buttonOpt.map((row, index) => {
      return (
        <div key={index} className="row">
          {row.map((char) => {
            return (
              <Button key={char} handleClick={handleOpClick}>
                {char}
              </Button>
            );
          })}
        </div>
      );
    });
  }

  return (
    <div className="app">
      <Input input={input} />
      {renderButtons()}
      <div className="row">
        <Button handleClick={handleClearClick} label={"clear-btn"}>
          Clear
        </Button>
        <Button handleClick={handleEqualClick} label={"equal-btn"}>
          =
        </Button>
      </div>
    </div>
  );
}

export default App;
