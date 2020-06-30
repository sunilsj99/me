import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Workex from "./components/Workex";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Others from "./components/Others";

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Workex} />
          <Route path="/others" exact component={Others} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
