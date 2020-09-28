import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Card,
  Divider,
  Embed,
  Header,
  Image,
} from 'semantic-ui-react';

// images
import * as landgraves from './images/graves.jpg';
import * as define from './images/define.png';
import * as abolish from './images/abolish.png';

class DACAResources extends Component {
  renderCards = (cards) => (
    <Card.Group stackable itemsPerRow={3} doubling>
      {
        cards.map(card => (
          <Card color="secondary">
            <Image src={card.img} wrapped />
            <Card.Content>
              {/* <Card.Header>{card.header}</Card.Header> */}
              <Card.Description>{card.description}</Card.Description>
              <Card.Description style={{ color: 'red' }}>{card.disclaimer}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button
                  primary
                  as='a' target="_blank"
                  href={card.link}
                  content='Visit Site'
                  icon='external alternate'
                  labelPosition='left'
                ></Button>
            </Card.Content>
          </Card>
        ))
      }
    </Card.Group>
  );

  render() {
    const movements = [
      {
        img: define,
        link: 'https://www.defineamerican.com/'
      },
    ]

    const articles = [
      {
        img: abolish,
        link: 'https://www.brennancenter.org/our-work/analysis-opinion/abolish-ice-movement-explained'
      },
    ]

    const books = [
      {
        img: landgraves,
        description: 'The Land of Open Graves, Living and Dying on the Migrant Trail by Jason de Leon',
        link: 'https://www.amazon.com/dp/0520282752?tag=ucpress0a'
      }
    ]

    return (
      <div>
        <Header as="h1">
          Resources on the DACA and Abolish ICE
        </Header>
        <Divider />
        <Header as="h2">
          Movements
        </Header>
        {this.renderCards(movements)}

        <Header as="h2">
          Articles
        </Header>
        {this.renderCards(articles)}

        <Header as="h2">
          Books
        </Header>
        {this.renderCards(books)}

        <Header as="h2">
          Videos
        </Header>
        <Header as="h3">
          What's really happening at the US-Mexico border and how we can do better, Erika Pinheiro
        </Header>
        <Embed
          active
          autoplay={false}
          source="youtube"
          id="Depn_GsxSqo"
          aspectRatio="21:9"
        />

      </div>
    );
  }
}

export default DACAResources;
