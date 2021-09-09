import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound/index";

function App() {
  return (
    <Switch>
      <Route path="/:page?/:key?" component={Home} />
      <Route path="/home">
        <Redirect to="/" />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
