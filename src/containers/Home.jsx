import React, { Component } from 'react';

// semantic-ui
import {
  Container,
  Header,
 } from 'semantic-ui-react';

// components
import NavBar from './../components/navbar';
import HomeDropdown from './../components/home/HomeDropdown';

class Home extends Component {
    render() {
        return (
            <div>
              <NavBar />
              <HomeDropdown />
              <br />
              <br />
              <Container textAlign="center">
                <Header as="h4">
                  This website builds on the work of activists and encourages action on social justice issues.  
                </Header>
                <p>
                  Use the drop down menu above to choose a cause that you would like to act for!
                </p>
              </Container>
            </div>
        );
    }
}

export default Home;