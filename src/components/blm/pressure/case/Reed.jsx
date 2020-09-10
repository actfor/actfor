import React, { Component } from 'react';

// components
import StepMessage from '../../../common/StepMessage';

// messages
import { caseReed } from './../messages';

// semantic-ui
import {
    Segment,
    Table
} from 'semantic-ui-react';

class Reed extends Component {

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
                            <Table.Cell>Marion County Prosecutor Mears</Table.Cell>
                            <Table.Cell>Phone: (317)327-3522</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Indianopolis Mayor Joe Hogsett</Table.Cell>
                            <Table.Cell>Phone: (317) 312-3601 or message online <a href="https://www.indy.gov/workflow/write-to-the-mayor">here</a> </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Indiana Governor Eric Holcomb</Table.Cell>
                            <Table.Cell>Phone: (317) 232-4567 or message online <a href="https://www.in.gov/gov/2752.htm">here</a> </Table.Cell>
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
                message: caseReed,
            },
            {
                type: 'other',
                name: 'Step 3',
                subheader: 'Reach out to Indiana officials with your message',
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

export default Reed;
