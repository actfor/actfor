import React, { Component } from "react";

// semantic-ui
import {
  Container,
  Header
} from "semantic-ui-react";

// router
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

// pages
import BLMDirectory from "./directory";
import BLMDonate from "./donate";

import PressureCities from './pressure/PressureCities';
import PressureState from './pressure/PressureState';

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
            <PressureState />
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
            <BLMDonate />
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
