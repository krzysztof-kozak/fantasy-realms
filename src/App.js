import React from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import LandingPage from "./landingPage";
import Play from "./play";
import Rules from "./rules";
import About from "./about";
import NotFound from "./notFound";

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/play" component={Play} />
      <Route path="/rules" component={Rules} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);

export default App;
