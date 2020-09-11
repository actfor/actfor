import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Divider,
  Header,
} from 'semantic-ui-react';

class DataForDefunding extends Component {
  render() {
    return (
      <div>
        <Header as="h1">
          Data for Defunding
          <Header.Subheader>
            This source offers customized and interactive visualizations on police spending.
          </Header.Subheader>
        </Header>
        <Divider />
        <iframe
          height="500px"
          width="100%"
          src="https://datafordefunding.shinyapps.io/scrolly/"
        />
        <br />
        <br />
        <Button
          primary
          as='a' target="_blank"
          href='https://datafordefunding.shinyapps.io/scrolly/'
          content='Visit Data for Defunding'
          size='big'
          icon='external alternate'
          labelPosition='left'
        />
      </div>
    );
  }
}

export default DataForDefunding;
