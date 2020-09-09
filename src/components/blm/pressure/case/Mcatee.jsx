import React, { Component } from 'react';

// components
import StepMessage from '../../../common/StepMessage';

// messages
import { caseMcatee } from './../messages';

// segments
import {renderStep3Segment} from '../congress/renderSegments';

class Mcatee extends Component {
  render() {
    const steps = [
      {
        type: 'name',
        name: 'Step 1',
      },
      {
        type: 'message',
        name: 'Step 2',
        message: caseMcatee,
      },
      {
        type: 'other',
        name: 'Step 3',
        subheader: 'Reach out to Kentucky officials with your message',
        segment: renderStep3Segment(),
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

export default Mcatee;
