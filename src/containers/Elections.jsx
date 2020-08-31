import React, { Component } from 'react';

// semantic-ui
import {
  Container,
  Header,
 } from 'semantic-ui-react';

// components
import NavBar from './../components/navbar';

class Elections extends Component {
  render() {
    return (
      <div>
        <NavBar unscrollable />
        <Container textAlign="center">
          <Header as="h1">
            U.S. Elections 2020
          </Header>
        </Container>
      </div>
    );
  }
}

export default Elections;