import React, { Component } from 'react';

// semantic-ui
import {
  Container,
  Header,
 } from 'semantic-ui-react';

// components
import NavBar from './../components/navbar';
import HomeDropdown from './../components/home/HomeDropdown';
import HomeSlideshow from '../components/home/HomeSlideshow';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar unscrollable />
        <Container textAlign="center">
          <HomeDropdown />
          <br />
          <div style={{ fontSize: '20px' }}>
            <Header as="h2">
              This website builds on the work of activists and encourages action on social justice issues.  
            </Header>
            <p>
              Use the drop down menu below to choose a cause that you would like to act for!
            </p>
          </div>
          <br />
          <HomeSlideshow />
        </Container>
      </div>
    );
  }
}

export default Home;