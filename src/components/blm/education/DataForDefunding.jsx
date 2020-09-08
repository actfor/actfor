import React, { Component } from 'react';

// semantic-ui
import {
  Header,
} from 'semantic-ui-react';

class DataForDefunding extends Component {
  render() {
    return (
      <div>
        <Header as="h3">
          Data for Defunding Website
        </Header>
        <iframe
          height="500px"
          width="100%"
          src={'https://datafordefunding.shinyapps.io/scrolly/'}
        />
      </div>
    );
  }
}

export default DataForDefunding;
