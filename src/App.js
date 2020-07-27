import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { RightSidebar } from "./components/RightSidebar";
import { TvShow } from "./components/TvShow";
import { MovieDescription } from "./components/MovieDescription";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <div className="App">
    <GlobalProvider>
      <Router>
        <RightSidebar></RightSidebar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/watchlist" component={Watchlist} />
          <Route exact path="/watched" component={Watched} />
          <Route exact path="/tvshow" component={TvShow} />
          {/* <Route exact path="/:id" component={MovieDescription} /> */}
        </Switch>
      </Router></GlobalProvider>
    </div>
  );
}

export default App;
