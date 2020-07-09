import React, { Component } from 'react';

// components
import StepMessage from './../../../StepMessage';

// messages
import { congressHJ56 } from './../messages';

// segments
import {
  renderGovTrackSegment,
  renderStep3Segment
} from './renderSegments';

class HJ56Message extends Component {
  render() {
    const steps = [
      {
        type: 'name',
        name: 'Step 1',
      },
      {
        type: 'message',
        name: 'Step 2',
        message: congressHJ56,
      },
      {
        type: 'other',
        name: 'Step 3',
        subheader: 'Find your congress representative, and paste your message!',
        segment: renderStep3Segment(),
      },
      {
        type: 'other',
        name: 'GovTrack',
        subheader: 'Follow and track this bill on the govtrack site!',
        segment: renderGovTrackSegment("https://www.govtrack.us/congress/bills/116/hjres56"),
      }
    ]
    return (
      <div>
        <StepMessage
          steps={steps}
          congress
        />
      </div>
    );
  }
}

export default HJ56Message;