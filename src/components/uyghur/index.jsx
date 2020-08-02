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
import UyghurBoycott  from './boycott'

import UyghurDirectory from './directory';

import UyghurArticle from './education/article';
import UyghurNowThis from './education/nowthis';
import UyghurResources from './education/resources';

import UyghurPeople from './people';
import UyghurDonate from './donate';

import PressureCongress from './pressure/PressureCongress'
import PressureBrands from './pressure/PressureBrands'

import UyghurDonate from './donate';


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

          <Route path="/uyghur/pressure/brands">
            <Header as="h2">
              Pressure American brands to stop using forced Uyghur labor
              <Header.Subheader>
                Urge brands to terminate all contracts with Xinjiang manufacturers benefitting from the forced labor of Uyghurs
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
            <UyghurPeople />
          </Route>

          <Route path="/uyghur/boycott/">
            <UyghurBoycott />
          </Route>

          <Route path="/uyghur/donate/">
            <UyghurDonate />
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
