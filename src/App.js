import "./App.css";
import GreetingToggle from "./components/GreetingToggle";
import CounterWidget from "./components/CounterWidget";

function App() {
  return (
    <div className="App">
      <CounterWidget />
      <GreetingToggle />
    </div>
  );
}

export default App;
