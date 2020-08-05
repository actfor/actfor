import React, { Component } from 'react';

// semantic-ui
import {
  Container,
  Header
} from 'semantic-ui-react';

// router
import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

// pages
import BLMDirectory from './directory';

import PressureCities from './pressure/PressureCities';

class BLMPages extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/blm">
            <BLMDirectory />
          </Route>

          <Route path="/blm/education">
            BLM Education
          </Route>

          <Route path="/blm/pressure/congress">
            BLM Public Pressure - Congress
          </Route>

          <Route path="/blm/pressure/state">
            BLM Public Pressure - State
          </Route>

          <Route path="/blm/pressure/cities">
            <PressureCities />
          </Route>

          <Route path="/blm/pressure/cases">
            BLM Public Pressure - Cases
          </Route>

          <Route path="/blm/pressure/petitions">
            BLM Public Pressure - Petitions
          </Route>

          <Route path="/blm/people">
            BLM People
          </Route>

          <Route path="/blm/donate">
            BLM Donate
          </Route>

          <Route path="/blm/*">
            <Redirect to="/blm" />
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default BLMPages;