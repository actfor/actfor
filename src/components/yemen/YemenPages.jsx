import React, { Component } from 'react';

import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

// pages
import PressureCongress from './pressure/PressureCongress';
import PressureMedia from './pressure/PressureMedia';
import PressureWhiteHouse from './pressure/PressureWhiteHouse';
import CrisisArticle from './education/CrisisArticle';

import Donate from './donate';

class YemenPages extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/yemen/education/crisis">
            <CrisisArticle />
          </Route>

          <Route path="/yemen/education/resources">
            {/* <Resources /> */}
          </Route>

          <Route path="/yemen/pressure/media">
            <PressureMedia />
          </Route>

          <Route path="/yemen/pressure/whitehouse">
            <PressureWhiteHouse />
          </Route>

          <Route path="/yemen/pressure/congress">
            <PressureCongress />
          </Route>

          <Route path="/yemen/donate">
            <Donate />
          </Route>

          <Route path="/yemen/*">
            <Redirect to="/yemen/education/crisis" />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default YemenPages;
