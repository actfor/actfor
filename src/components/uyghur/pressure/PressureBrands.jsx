import React, { Component } from 'react';

// components
import StepMessage from '../../common/StepMessage';
import BrandsSegment from './brands/BrandsSegment';

// messages
import { brandsMess } from './messages'

class BrandsMessage extends Component {

  render() {
    const steps = [
      {
        type: 'name',
        name: 'Step 1',
      },
      {
        type: 'message',
        name: 'Step 2',
        message: brandsMess,
      },
      {
        type: 'other',
        name: 'Step 3',
        subheader: 'Email all of the brands',
        component: BrandsSegment
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

export default BrandsMessage;
