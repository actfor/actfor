import React, { Component } from 'react';

// components
import StepMessage from '../../../common/StepMessage';

// messages
import { caseTaylor } from './../messages';

// segments
import {
    renderOtherSegment,
    renderStep3Segment
} from '../congress/renderSegments';

class Taylor extends Component {
    render() {
        const steps = [
            {
                type: 'name',
                name: 'Step 1',
            },
            {
                type: 'message',
                name: 'Step 2',
                message: caseTaylor,
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

export default Taylor;