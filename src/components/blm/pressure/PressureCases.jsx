import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Divider,
  Header,
} from 'semantic-ui-react';

class PressureCases extends Component {
  render() {
    return (
      <div>
          <Header as="h1">
          Case Specific Demands
          <Header.Subheader>
            This source offers case specific demands
          </Header.Subheader>
        </Header>
        <Divider />

      </div>
    );
  }
}

export default PressureCases;