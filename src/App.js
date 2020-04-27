import React from "react";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="App" style={{ overflowX: "hidden" }}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
