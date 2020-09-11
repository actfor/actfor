import React, { Component } from 'react';

// components
import StepMessage from '../../../common/StepMessage';

// semantic-ui
import {
    Segment,
    Table
} from 'semantic-ui-react';

// messages
import { caseMcdade } from './../messages';

class Mcdade extends Component {

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
                            <Table.Cell>Mayor John E. Daily</Table.Cell>
                            <Table.Cell>Phone: 850-891-2000 or message online <a href="https://www.talgov.com/main/email.aspx?emailto=mayor">here</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Florida AG Ashley Moody</Table.Cell>
                            <Table.Cell>message online <a href="http://myfloridalegal.com/contact.nsf/contact?Open&Section=Attorney_General">here</a> </Table.Cell>
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
                message: caseMcdade,
            },
            {
                type: 'other',
                name: 'Step 3',
                subheader: 'Reach out to Florida officials with your message',
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

export default Mcdade;
