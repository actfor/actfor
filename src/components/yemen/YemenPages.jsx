import React, { Component } from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

// pages
import PressureMedia from './pressure/PressureMedia';

class YemenPages extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/yemen/education/jahood">
            Maya Article
          </Route>

          <Route path="/yemen/education/resources">
            Other Resources List
          </Route>

          <Route path="/yemen/pressure/media">
            Pressure Media
            <PressureMedia />
          </Route>

          <Route path="/yemen/pressure/whitehouse">
            Pressure White House
          </Route>

          <Route path="/yemen/pressure/Congress">
            Pressure Media
          </Route>

          <Route path="/yemen/donate">
            Donate
          </Route>
        </Switch>
      </div>
    );
  }
}

export default YemenPages;