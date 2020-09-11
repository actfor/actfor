import React, { Component } from 'react';

// semantic-ui
import {
    Segment,
    Table
} from 'semantic-ui-react';

// components
import StepMessage from '../../../common/StepMessage';

// messages
import { caseArbery } from './../messages';

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
                            <Table.Cell>Cobb County DA Joyette Holmes</Table.Cell>
                            <Table.Cell>Phone: (770) 528-3080 or email <a href="mailto:cobbdistrictattorney@cobbcounty.org">here</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Georgia State Legislature</Table.Cell>
                            <Table.Cell>message online <a href="http://www.house.ga.gov/Representatives/en-US/HouseMembersList.aspx">here</a> </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Georgia Governor Nathan Deal</Table.Cell>
                            <Table.Cell>Phone: (404) 656-1776 or message online <a href="https://georgia.gov/contact-georgiagov">here</a> </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Mayor of Brunswick Cornell Harvey</Table.Cell>
                            <Table.Cell>Phone: (912) 571-2218 or email <a href="mailto:mayorcharvey@gmail.com">here</a> </Table.Cell>
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
