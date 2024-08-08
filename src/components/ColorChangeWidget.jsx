import { useState } from "react";

export default function ColorChangeWidget() {
  const [color, setColor] = useState("black");
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setColor(value);
    setValue("");
  };

  return (
    <div>
      <h1 style={{ color: color }}>Change my color</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter color"
      />
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
