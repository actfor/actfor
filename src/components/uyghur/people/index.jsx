import React, { Component } from 'react';

// semantic-ui
import {
  Card,
  Container,
  Divider,
  Header,
  Image,
} from 'semantic-ui-react';

// components
import PeopleCards from './../../common/PeopleCards';

// card content
import {
  activists,
  journalists,
  stories,
} from './cards';


class UyghurPeople extends Component {
  render() {
    return (
      <Container>
        <Header as="h1">
          People of the Uyghur Movement
        </Header>
        <Divider />

        <Header as="h2">
          Stories
        </Header>
        <PeopleCards people={stories()} />


        <Header as="h2">
          Activists
        </Header>
        <PeopleCards people={activists()} />

        <Header as="h2">
          Journalists
        </Header>
        <PeopleCards people={journalists()} />
      </Container>
    );
  }
}

export default UyghurPeople;