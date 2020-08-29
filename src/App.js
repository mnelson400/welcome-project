import React from "react";
import "./App.css";
import Welcome from "./component/welcome/Welcome";
import Clock from "./component/clock/Clock";
import Contact from "./component/contact/Contact";
import Navigation from "./component/navigation/Navigation";
import Timer from "./component/stopwatch/Timer";
import Meme_generator from "./component/meme/Meme_generator";
import Page404 from "./component/error_404/Page404";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <Welcome name="Mark" />} />
        <Route
          path="/welcome/:name"
          render={(props) => (
            <Welcome {...props} name={props.match.params.name} />
          )}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/stopwatch" component={Timer} />
        <div className="memeBody">
          <Route path="/meme" component={Meme_generator} />
        </div>
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
