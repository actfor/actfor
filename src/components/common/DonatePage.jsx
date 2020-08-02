import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Card,
  Divider,
  Header,
  Image,
} from 'semantic-ui-react';

class DonatePage extends Component {
  render() {
    const { cards, header, subheader } = this.props;
    return (
      <div>
        <Header as="h1">
          {header}
          <Header.Subheader>
            {subheader}
          </Header.Subheader>
        </Header>
        <Divider />
        <br />
        <Card.Group stackable>
          {cards.map(card => (
            <Card color="secondary">
              <Image src={card.img} wrapped />
              <Card.Content>
                <Card.Header>{card.header}</Card.Header>
                <Divider />
                <Card.Description>{card.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  primary
                  as='a' target="_blank"
                  href={card.link}
                  content='Visit Site'
                  icon='external alternate'
                  labelPosition='left'
                  />
              </Card.Content>
            </Card>
            ))}
        </Card.Group>
      </div>
    );
  }
}

export default DonatePage;