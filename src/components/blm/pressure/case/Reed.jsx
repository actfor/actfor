import React, { Component } from 'react';

// components
import StepMessage from '../../../common/StepMessage';

// messages
import { caseReed } from './../messages';

// segments
import {
    renderOtherSegment,
    renderStep3Segment
} from '../congress/renderSegments';

class Reed extends Component {
    render() {
        const steps = [
            {
                type: 'name',
                name: 'Step 1',
            },
            {
                type: 'message',
                name: 'Step 2',
                message: caseReed,
            },
            {
                type: 'other',
                name: 'Step 3',
                subheader: 'Find your congress representative, and paste your message!',
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

export default Reed;
