import "./App.css";

import { useState } from "react";

import GreetingToggle from "./components/GreetingToggle";
import CounterWidget from "./components/CounterWidget";
import HideToggle from "./components/HideToggle";
import FontSize from "./components/FontSize";
import AlignText from "./components/AlignText";
import ClockWidget from "./components/ClockWidget";

function App() {
  const [isClockMounted, setIsClockMounted] = useState(true);

  const toggleClock = () => {
    setIsClockMounted(!isClockMounted);
  };

  return (
    <div className="App">
      <CounterWidget />
      <GreetingToggle />
      <HideToggle />
      <FontSize />
      <AlignText />
      {isClockMounted && <ClockWidget />}
      <button onClick={toggleClock}>
        {isClockMounted ? "Unmount Clock" : "Mount Clock"}
      </button>
    </div>
  );
}

export default App;
