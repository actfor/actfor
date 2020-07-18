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

// containers
import About from './containers/About';
import Home from './containers/Home';
import Yemen from './containers/Yemen';

// Initialize google analytics page view tracking
const trackingId = "UA-73887375-2"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class ActFor extends Component {

  render() {
    return (
      <div style={{ margin: '24px' }} >
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/yemen">
              <Yemen />
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