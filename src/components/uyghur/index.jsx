import React, { Component } from 'react';

// semantic-ui
import { Header } from 'semantic-ui-react';

// router
import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

// pages
import UyghurNowThis from './education/nowthis';
import PressureCongress from './pressure/PressureCongress'
import PressureBrands from './pressure/PressureBrands'

class UyghurPages extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/uyghur/education/nowthis">
            <UyghurNowThis />
          </Route>

          <Route path="/uyghur/education/who">
            Uyghur Education
          </Route>

          <Route path="/uyghur/pressure/media">
            <Header>
              <Header.Subheader>
                Use this page to contact brands involved in the crisis.
              </Header.Subheader>
            </Header>
            <PressureBrands />
          </Route>

          <Route path="/uyghur/pressure/congress">
            <Header>
              <Header.Subheader>
                Use this page to contact congress.
              </Header.Subheader>
            </Header>
            <PressureCongress />
          </Route>

          <Route path="/uyghur/people/">
            Uyghur People
          </Route>

          <Route path="/uyghur/boycott/">
            Uyghur Boycott
          </Route>

          <Route path="/uyghur/donate/">
            Uyghur Donate
          </Route>

          <Route path="/uyghur/*">
            <Redirect to="/uyghur/education/" />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default UyghurPages;
