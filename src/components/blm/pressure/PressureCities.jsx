import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Divider,
  Header,
} from 'semantic-ui-react';

class PressureCities extends Component {
  render() {
    return (
      <div>
        <Header as="h1">
          Pressure Cities
          <Header.Subheader>
            This source offers populated email templates to defund the police in cities all over the nation
          </Header.Subheader>
        </Header>
        <Divider />
        <iframe
          height="500px"
          width="100%"
          src="https://defund12.org/"
        />
        <br />
        <br />
        <Button
          primary
          as='a' target="_blank"
          href='https://defund12.org/'
          content='Visit Defund 12'
          size='big'
          icon='external alternate'
          labelPosition='left'
        />
      </div>
    );
  }
}

export default PressureCities;