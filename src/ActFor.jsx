import React, { Component } from 'react';

// routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// containers
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';

class ActFor extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="*">
              <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    );
  }

}

export default ActFor;