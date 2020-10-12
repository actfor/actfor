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
import DACADirectory from "./directory";
import PressureCongress from './pressure/PressureCongress';
import DACAPeople from "./people";
import DACADonate from "./donate";

class DACAPages extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/daca">
            <DACADirectory />
          </Route>

          <Route path="/daca/education">
            DACA Education
          </Route>

          <Route path="/daca/pressure/congress">
            <PressureCongress />
          </Route>

          <Route path="/daca/people">
            <DACAPeople />
          </Route>

          <Route path="/daca/donate">
            <DACADonate />
          </Route>

          <Route path="/daca/*">
            <Redirect to="/daca" />
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default DACAPages;
