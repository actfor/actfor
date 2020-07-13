import React, { Component } from 'react';

// components
import StepMessage from './../../../StepMessage';

// messages
import { congressHR910 } from './../messages';

// segments
import {
  renderGovTrackSegment,
  renderStep3Segment
} from './renderSegments';

class HR910Message extends Component {
  render() {
    const steps = [
      {
        type: 'name',
        name: 'Step 1',
      },
      {
        type: 'message',
        name: 'Step 2',
        message: congressHR910,
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
        segment: renderGovTrackSegment("https://www.govtrack.us/congress/bills/116/hr910"),
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

export default HR910Message;