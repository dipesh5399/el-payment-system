import React, { Component } from "react";

import HomePage from "./component/HomePage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
           
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
