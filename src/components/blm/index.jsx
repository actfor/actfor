import React, { Component } from "react";

// semantic-ui
import {
  Container,
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
import PressureCases from './pressure/PressureCases';
import PressureCities from './pressure/PressureCities';
import PressureState from './pressure/PressureState';
import PressureCongress from './pressure/PressureCongress';
import PressurePetitions from './pressure/PressurePetitions';

import DataForDefunding from './education/DataForDefunding';


import BLMPeople from './people';

class BLMPages extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/blm">
            <BLMDirectory />
          </Route>

          <Route path="/blm/education/datafordefunding">
            <DataForDefunding />
          </Route>

          <Route path="/blm/education/resources">
            Other Resources
          </Route>

          <Route path="/blm/pressure/congress">
            <PressureCongress />
          </Route>

          <Route path="/blm/pressure/state">
            <PressureState />
          </Route>

          <Route path="/blm/pressure/cities">
            <PressureCities />
          </Route>

          <Route path="/blm/pressure/cases">
            <PressureCases />
          </Route>

          <Route path="/blm/pressure/petitions">
            <PressurePetitions/>
          </Route>

          <Route path="/blm/people">
            <BLMPeople/>
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
