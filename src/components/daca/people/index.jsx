import React, { Component } from 'react';

// semantic-ui
import {
    Divider,
    Header
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
            </div>
        );
    }
}

export default DACAPeople;