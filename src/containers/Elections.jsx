import React, { Component } from 'react';

// semantic-ui
import {
  Container,
  Header,
  Divider,
 } from 'semantic-ui-react';

// components
import NavBar from './../components/navbar';
import Tables from './ElectionTables';


class Elections extends Component {

    render() {
        return (
            <div>
              <NavBar />
                <Container style={{ fontSize: '20px'}}>
                  <h1>Elect Officials that Hold the U.S. Accountable</h1>
                  <Divider />
                  <p >
                  We've compiled data from all over the country to help prepare you for your upcoming elections.
                  <br /><b>See where candidates stand on the most pressing issues</b>
                  </p>
                  <Tables />
                </Container>
            </div>
        );
    }
}

export default Elections;
