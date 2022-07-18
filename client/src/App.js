import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import Create from "./components/Create/create";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Nueva-Nave" component={Create} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
