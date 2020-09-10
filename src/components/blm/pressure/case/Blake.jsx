import React, { Component } from 'react';

// components
import StepMessage from '../../../common/StepMessage';

// semantic-ui
import {
    Segment,
    Table
} from 'semantic-ui-react';

// messages
import { caseBlake } from './../messages';

class Blake extends Component {
    renderStep3Segment = () => {

        return (
            <Segment placeholder>
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Official</Table.HeaderCell>
                            <Table.HeaderCell>Contact Information</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Kenosha Mayor John Antaramian</Table.Cell>
                            <Table.Cell>Phone: (262)-653-4000 or mail <a href="mailto:mayor@kenosha.org
">here</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Kenosha DA Michael Graveley</Table.Cell>
                            <Table.Cell>Phone: (262)-653-2400 or mail <a href="mailto:michael.graveley@da.wi.gov">here</a> </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Wisconsin Attorney General Josh Kaul</Table.Cell>
                            <Table.Cell>Phone: (608)-266-1221</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Wisconsin Governor Tony Evers</Table.Cell>
                            <Table.Cell>Phone: (608)-266-1212</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Kenosha Police Department Chief of Police</Table.Cell>
                            <Table.Cell>Phone: 808-244-6300 or mail <a href="mailto:mailto:dgm398@kenoshapolice.com">Robert.Schroeder@louisvilleky.gov</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Kenosha City Attorney</Table.Cell>
                            <Table.Cell>Phone: 262-653-4000</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Dept of Prosecuting Attorney for Maui County</Table.Cell>
                            <Table.Cell>Phone: 808-270-7777 or mail <a href="mailto:prosecuting.attorney@mauicounty.gov">here</a></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
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
                message: caseBlake,
            },
            {
                type: 'other',
                name: 'Step 3',
                subheader: 'Reach out to Wisconsin officials with your message',
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

export default Blake;
