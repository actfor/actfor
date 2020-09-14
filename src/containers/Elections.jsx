import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Container,
  Divider,
  Header,
 } from 'semantic-ui-react';

// components
import NavBar from './../components/navbar';

const URL = "https://docs.google.com/spreadsheets/d/1Tdqmms5h0AGcDDI0x2xHc7z21fXpH1LUkhb21dXbOIc/edit?usp=sharing"

class Elections extends Component {
  render() {
    return (
      <div>
        <NavBar unscrollable />
          <div>
            <Header as="h1">
              U.S. Elections 2020
            </Header>
            <Divider />
            <iframe
              height="500px"
              width="100%"
              src={URL}
            />
            <br />
            <br />
            <Button
              primary
              as='a' target="_blank"
              href={URL}
              content='Visit the Google Sheet'
              size='big'
              icon='google drive'
              labelPosition='left'
            />
          </div>
      </div>
    );
  }
}

export default Elections;