import React, { Component } from 'react';

// semantic-ui
import {
    Button,
    Divider,
    Header,
    Segment,
    Table
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
                            <Table.Cell>Jefferson County Attorney</Table.Cell>
                            <Table.Cell>Phone: (502) 574-6336 or message online <a href="https://louisvilleky.wufoo.com/forms/contact-the-jefferson-county-attorney/">here</a> </Table.Cell>
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
