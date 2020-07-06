import React, { Component } from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

// pages
import PressureMedia from './pressure/PressureMedia';
import PressureWhiteHouse from './pressure/PressureWhiteHouse';

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
            <PressureWhiteHouse />
          </Route>

          <Route path="/yemen/pressure/Congress">
            Pressure Congress
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