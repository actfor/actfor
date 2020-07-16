import React, { Component } from 'react';

// semantic-ui
import { List } from 'semantic-ui-react';

// components
import StepMessage from '../../../common/StepMessage';

// messages
import { mediaMessTime } from './../messages'

class TimeMessage extends Component {
  renderLeftSegment = () => (
    <List>
      <List.Item>
        <h4>Contact Customer Service</h4>
        <List.List>
          <List.Item><b>Tel dialing from the UK:</b> 0345 045 0360</List.Item>
          <List.Item><b>From all other countries:</b> +44 (0) 1858 438830</List.Item>
        </List.List>
      </List.Item>
    </List>
  );

  render() {
    const steps = [
      {
        type: 'name',
        name: 'Step 1',
      },
      {
        type: 'message',
        name: 'Step 2',
        message: mediaMessTime,
      },
      {
        type: 'email',
        name: 'Step 3',
        subheader: 'Contact Time Magazine! Either call, or send an email.',
        sendTo: 'Time Magazine',
        email: 'time@subscription.co.uk',
        subject: 'Your Feature of MBS and Yemen',
        message: mediaMessTime,
        leftSegment: this.renderLeftSegment(),
      }
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

export default TimeMessage;