import React, { Component } from 'react';

// semantic-ui
import {
    Card,
    Container,
    Divider,
    Header,
    Image,
    Button,
} from 'semantic-ui-react';

// components
import PeopleCards from './../../common/PeopleCards';

// card content
import {
    activists,
} from './cards';


class DACAPeople extends Component {
    render() {
        return (
            <div>
                <Header as="h1">
                    People of DACA And Abolishing ICE
        </Header>
                <Divider />

                <Header as="h2">
                    Activists
        </Header>
                <PeopleCards people={activists} />

                <Header as="h2">
                    Police Brutality Victims
        </Header>

                <Button
                    primary
                    as='a' target="_blank"
                    href="http://www.pb-resources.com"
                    content='Read More'
                    icon='external alternate'
                    labelPosition='left'
                />

            </div>
        );
    }
}

export default DACAPeople;