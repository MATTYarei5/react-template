import { useState } from "react";

const FontSize = () => {
  const [size, setSize] = useState(18);

  const bigger = () => {
    if (size < 100) setSize(size + 2);
  };

  const smaller = () => {
    if (size > 0) setSize(size - 2);
  };

  return (
    <div>
      <h2 style={{ fontSize: `${size}px` }}>Resize Me</h2>
      <button onClick={bigger}>+</button>
      <button onClick={smaller}>-</button>
    </div>
  );
};

export default FontSize;
