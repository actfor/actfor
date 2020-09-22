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
            DACA Pressure Congress
          </Route>

          <Route path="/daca/people">
            DACA People
          </Route>

          <Route path="/daca/donate">
            DACA Donate
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
