import { useState } from "react";

const CounterWidget = () => {
  const [count, setCount] = useState(1);

  const addNum = () => setCount(count + 1);
  const subNum = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button onClick={addNum}>Add</button>
      <button onClick={subNum}>Subtraction</button>
    </div>
  );
};

export default CounterWidget;
