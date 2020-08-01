import React, { Component } from 'react';

// semantic-ui
import {
  List,
  Button,
  Segment,
  Header,
  Icon,
  Table,
} from 'semantic-ui-react';

import reactElementToJSXString from 'react-element-to-jsx-string';

// components
import StepMessage from '../../../common/StepMessage';
import CopyMessage from '../../../common/CopyMessage';
import MailTo from '../../../common/MailTo';

// messages
import { brandsMess } from './../messages'

//segment
import { brandSegment } from './brandSegments';


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
        functionalSegment: brandSegment,
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
