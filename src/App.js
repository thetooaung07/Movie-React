import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import {Watchlist} from "./components/Watchlist";
import {Watched} from "./components/Watched";
import {RightSidebar} from "./components/RightSidebar";

function App() {
  return (
    <div className="App">
      
      <Router>
      <RightSidebar ></RightSidebar>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route  exact path="/watchlist">
            <Watchlist></Watchlist>
          </Route>
          <Route  exact path="/watched">
            <Watched></Watched>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
