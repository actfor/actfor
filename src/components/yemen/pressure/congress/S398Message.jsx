import React, { Component } from 'react';

import StepMessage from './../../../StepMessage';

// messages
import { congressS398 } from './../messages'

class S398Message extends Component {
  render() {
    const steps = [
      {
        type: 'name',
        name: 'Step 1',
      },
      {
        type: 'message',
        name: 'Step 2',
        message: congressS398,
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

export default S398Message;