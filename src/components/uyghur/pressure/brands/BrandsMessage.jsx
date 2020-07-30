import React, { Component } from 'react';

// semantic-ui
import {
  List,
  Button,
  Segment,
} from 'semantic-ui-react';

// components
import StepMessage from '../../../common/StepMessage';

// messages
import { brandsMess } from './../messages'


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
        type: 'email-all',
        name: 'Step 3',
        subheader: 'Contact these brands at the emails below',
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
