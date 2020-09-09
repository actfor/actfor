import React, { Component } from 'react';

// semantic-ui
import {
    Button,
    Divider,
    Header,
    Segment,
  } from 'semantic-ui-react';

// components
import StepMessage from '../../../common/StepMessage';

// messages
import { caseArbery } from './../messages';

// segments



class Arbery extends Component {

    renderStep3Segment = () => {

        return (
          <Segment placeholder>
            <Button.Group vertical primary>
              
                <Button
                  as="a"
                  target="_blank"
                  href={"mailto:cobbdistrictattorney@cobbcounty.org"}
                  content={"Cobb County DA: Joyette Holmes"}
                />
              
            </Button.Group>
          </Segment>
        )
      }
    render() {



        const steps = [
            {
                type: 'name',
                name: 'Step 1',
            },
            {
                type: 'message',
                name: 'Step 2',
                message: caseArbery,
            },
            {
                type: 'other',
                name: 'Step 3',
                subheader: 'Reach out to Georgia officials with your message',
                component: this.renderStep3Segment,
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

export default Arbery;
