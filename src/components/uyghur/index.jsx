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
import UyghurDirectory from './directory';
import UyghurNowThis from './education/nowthis';
import UyghurPeople from './people';

class UyghurPages extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/uyghur">
            <UyghurDirectory />
          </Route>

          <Route path="/uyghur/education/nowthis">
            <UyghurNowThis />
          </Route>

          <Route path="/uyghur/education/who">
            Uyghur Education
          </Route>

          <Route path="/uyghur/pressure/">
            Uyghur Public Pressure
          </Route>

          <Route path="/uyghur/people/">
            <UyghurPeople />
          </Route>

          <Route path="/uyghur/boycott/">
            Uyghur Boycott
          </Route>

          <Route path="/uyghur/donate/">
            Uyghur Donate
          </Route>

          <Route path="/uyghur/*">
            <Redirect to="/uyghur" />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default UyghurPages;