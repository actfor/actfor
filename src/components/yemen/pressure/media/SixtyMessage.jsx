import React, { Component } from 'react';

// semantic-ui
import { List } from 'semantic-ui-react';

// components
import StepMessage from './../../../StepMessage';

// messages
import { mediaMess60 } from './../messages'

class SixtyMessage extends Component {
  renderLeftSegment = () => (
    <List>
      <List.Item>
        <h4>Contact NBC</h4>
        <List.List>
          <List.Item><b>Phone:</b> (212) 975-3247</List.Item>
          <List.Item>
            <b>Address:</b>
            <List.List>
              <List.Item>60 Minutes</List.Item>
              <List.Item>
                524 West 57th St.
              </List.Item>
              <List.Item>
                New York, NY 10019
              </List.Item>
            </List.List>
          </List.Item>
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
        message: mediaMess60,
      },
      {
        type: 'email',
        name: 'Step 3',
        subheader: 'Contact 60 Minutes! Either call, or send an email.',
        sendTo: '60 Minutes',
        email: '60min@cbsnews.com',
        subject: 'Your Feature of MBS and Yemen',
        message: mediaMess60,
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

export default SixtyMessage;