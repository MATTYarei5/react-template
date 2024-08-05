import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/user/:id" component={User} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
