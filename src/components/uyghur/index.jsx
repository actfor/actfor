import React, { Component } from 'react';

// semantic-ui
import { Container } from 'semantic-ui-react';

// router
import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

// pages
import UyghurDirectory from './directory';

import UyghurArticle from './education/article';
import UyghurNowThis from './education/nowthis';
import UyghurResources from './education/resources';

import UyghurBoycott  from './boycott'

import UyghurPeople from './people';


class UyghurPages extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/uyghur">
            <UyghurDirectory />
          </Route>

          <Route path="/uyghur/education/article">
            <UyghurArticle />
          </Route>

          <Route path="/uyghur/education/nowthis">
            <UyghurNowThis />
          </Route>

          <Route path="/uyghur/education/resources">
            <UyghurResources />
          </Route>

          <Route path="/uyghur/pressure/">
            Uyghur Public Pressure
          </Route>

          <Route path="/uyghur/people/">
            <UyghurPeople />
          </Route>

          <Route path="/uyghur/boycott/">
            <UyghurBoycott />
          </Route>

          <Route path="/uyghur/donate/">
            Uyghur Donate
          </Route>

          <Route path="/uyghur/*">
            <Redirect to="/uyghur" />
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default UyghurPages;