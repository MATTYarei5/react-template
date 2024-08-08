import { useState } from "react";

export default function SliderWidget() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleSliderChange = (color) => (event) => {
    const value = parseInt(event.target.value, 10);
    if (color === "red") setRed(value);
    if (color === "green") setGreen(value);
    if (color === "blue") setBlue(value);
  };

  const color = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      ></div>

      <div style={{ marginBottom: "10px" }}>
        <label>Red: {red}</label>
        <br />
        <label>Green: {green}</label>
        <br />
        <label>Blue: {blue}</label>
      </div>

      <input
        type="range"
        min="0"
        max="255"
        value={red}
        onChange={handleSliderChange("red")}
        style={{ marginBottom: "10px" }}
      />

      <input
        type="range"
        min="0"
        max="255"
        value={green}
        onChange={handleSliderChange("green")}
        style={{ marginBottom: "10px" }}
      />
      <br />

      <input
        type="range"
        min="0"
        max="255"
        value={blue}
        onChange={handleSliderChange("blue")}
        style={{ marginBottom: "10px" }}
      />
    </div>
  );
}
