import React, { Component } from 'react';

// routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// containers
import About from './containers/About';
import BLM from './containers/BLM';
import Contact from './containers/Contact';
import Home from './containers/Home';
import Yemen from './containers/Yemen';

class ActFor extends Component {

  render() {
    return (
      <div style={{ margin: '24px' }} >
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

            <Route path="/yemen">
              <Yemen />
            </Route>

            <Route path="/blm">
              <BLM />
            </Route>

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

}

export default ActFor;