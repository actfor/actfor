import React, { Component } from 'react';

// semantic-ui
import {
  Divider,
  Header,
  Segment,
} from 'semantic-ui-react';

// components
import CopyMessage from './../../../common/CopyMessage';

// messages
import { pendingBills, noPendingBills } from './../messages';

// utils
import states, { isPendingBillState } from './../utils/states';
import StepMessage from '../../../common/StepMessage';


class StateMessage extends Component {
  renderStep2Segment = ({ name, location, custom }) => {
    const { state } = this.props;

    const bills = isPendingBillState(state); 
    const message = bills ? pendingBills(name, location, custom, bills) : noPendingBills(name, location, custom);

    return (
      <Segment>
        <CopyMessage id="stateMessage" message={message}/>
        <Divider />
        {message}
      </Segment>
    );
  }

  render() {
    const { state } = this.props;

    if (state == '') {
      return null;
    }
    
    const currentState = states.find(el => el.value == state)

    const steps = [
      {
        type: 'name',
        name: 'Step 1',
      },
      {
        type: 'other',
        name: 'Step 2',
        subheader: 'Read our generated script for your message, and then copy it by clicking the button!',
        component: this.renderStep2Segment,
      },
    ];


    return (
      <div>
        <br />
        <Header>
          {currentState.text}
        </Header>
        <Divider />
        <StepMessage steps={steps} />
      </div>
    );
  }
}

export default StateMessage;