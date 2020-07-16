import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Divider,
  Grid,
  Icon,
  List,
  Segment
} from 'semantic-ui-react';

// components
import StepMessage from '../../common/StepMessage';

// messages
import { whiteHouseMessage } from './messages';

class PressureWhiteHouse extends Component {
  renderStep3Segment = () => (
    <Segment placeholder>
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column>
          <List>
            <List.Item>
              <h4>Phone Numbers</h4>
              <List.List>
                <List.Item>Comments: 202-456-1111</List.Item>
                <List.Item>Switchboard: 202-456-1414</List.Item>
              </List.List>
            </List.Item>
            <Divider /> 
            <List.Item>
              <h4>TTY/TTD</h4>
              <List.List>
                <List.Item>Comments: 202-456-6213</List.Item>
                <List.Item>Visitor’s Office: 202-456-2121</List.Item>
              </List.List>
            </List.Item>
          </List>
        </Grid.Column>

        <Grid.Column textAlign='center' verticalAlign='middle'>
          <Icon color='grey' name='university' size='huge' />
          <br />
          <br />
          <Button
            primary
            as='a' target="_blank"
            href='https://www.whitehouse.gov/contact/'
            content='Visit White House Site'
            size='big'
            icon='external alternate'
            labelPosition='left'
          >
          </Button>
        </Grid.Column>
      </Grid>
      <Divider vertical>Or</Divider>
    </Segment>
  )

  render() {
    const steps = [
      {
        type: 'name',
        name: 'Step 1',
      },
      {
        type: 'message',
        name: 'Step 2',
        message: whiteHouseMessage,
      },
      {
        type: 'other',
        name: 'Step 3',
        subheader: 'Contact the White House! Either call, or use the script to copy and paste a message to the White House. ',
        segment: this.renderStep3Segment(),
      },
    ]
    return (
      <div>
        <StepMessage
          steps={steps}
        />
      </div>
    );
  }
}

export default PressureWhiteHouse;