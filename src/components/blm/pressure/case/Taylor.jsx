import React, { Component } from 'react';

// components
import StepMessage from '../../../common/StepMessage';

// semantic-ui
import {
    Segment,
    Table
} from 'semantic-ui-react';

// messages
import { caseTaylor } from './../messages';

class Taylor extends Component {

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
                            <Table.Cell>Governor Beshear</Table.Cell>
                            <Table.Cell>Phone: (502) 564-2611 or message online <a href="https://governor.ky.gov/contact/contact-us">here</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Mayor Greg Fischer</Table.Cell>
                            <Table.Cell>Phone: (502) 574-2003 or message online <a href="https://louisvilleky.gov/government/mayor-greg-fischer/contact-mayors-office">here</a> </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Attorney General Cameron</Table.Cell>
                            <Table.Cell>Phone: (502) 429-7134 or message online <a href="https://ag.ky.gov/Contact-Us/Pages/default.aspx">here</a> </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Interim LMPD Police Chief Schroeder</Table.Cell>
                            <Table.Cell>Email here: <a href="mailto:Robert.Schroeder@louisvilleky.gov">Robert.Schroeder@louisvilleky.gov</a></Table.Cell>
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
                message: caseTaylor,
            },
            {
                type: 'other',
                name: 'Step 3',
                subheader: 'Reach out to Kentucky officials with your message',
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

export default Taylor;
