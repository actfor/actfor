import React, { Component } from 'react';

// routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from 'history';

// Google Analytics
import ReactGA from 'react-ga';
import GA from './utils/GoogleAnalytics'

// containers
import About from './containers/About';
import BLM from './containers/BLM';
import DACA from './containers/DACA';
import Home from './containers/Home';
import Uyghur from './containers/Uyghur';
import Yemen from './containers/Yemen';
import Elections from './containers/Elections';

class ActFor extends Component {

  render() {
    return (
      <div style={{ margin: '24px' }} >
        <Router>
        { GA.init() && <GA.RouteTracker /> }
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/about">
              <About />
            </Route>

            <Route path="/elections">
              <Elections />
            </Route>

            <Route path="/blm">
              <BLM />
            </Route>

            <Route path="/daca">
              <DACA />
            </Route>

            <Route path="/yemen">
              <Yemen />
            </Route>

            <Route path="/uyghur">
              <Uyghur />
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
