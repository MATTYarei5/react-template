import { useState, useEffect } from "react";

const GreetingToggle = () => {
  const [greeting, setGreeting] = useState(true);
  const toggleButton = () => setGreeting(greeting);

  return (
    <div className="greeting">
      <h2>{greeting ? "Hello" : "See you later"}</h2>
      <button onClick={toggleButton}>Toggle</button>
    </div>
  );
};

export default GreetingToggle;
