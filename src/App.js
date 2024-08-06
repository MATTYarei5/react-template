import "./App.css";
import GreetingToggle from "./components/GreetingToggle";
import CounterWidget from "./components/CounterWidget";
import HideToggle from "./components/HideToggle";
import FontSize from "./components/FontSize";
import AlignText from "./components/AlignText";

function App() {
  return (
    <div className="App">
      <CounterWidget />
      <GreetingToggle />
      <HideToggle />
      <FontSize />
      <AlignText />
    </div>
  );
}

export default App;
