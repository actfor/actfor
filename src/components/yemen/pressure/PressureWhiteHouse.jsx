import React, { Component } from 'react';

// components
import StepMessage from './../../StepMessage';

// messages
import { whiteHouseMessage } from './messages';

class PressureWhiteHouse extends Component {
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