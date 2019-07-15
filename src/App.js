import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./views/home/index.js";
import SlideShow from "./views/landingPage/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SlideShow} />
          <Route path="/home" component={Home} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
