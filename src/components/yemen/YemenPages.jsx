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

import Donate from './donate';
import { Header } from 'semantic-ui-react';

class YemenPages extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/yemen/education/crisis">
            Maya Article
          </Route>

          <Route path="/yemen/education/resources">
            Other Resources List
          </Route>

          <Route path="/yemen/pressure/media">
            <Header>
              <Header.Subheader>
                Use this page to contact media outlets.
              </Header.Subheader>
            </Header>
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