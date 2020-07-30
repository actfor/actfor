import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Card,
  Divider,
  Image,
} from 'semantic-ui-react';

class PeopleCards extends Component {
  render() {
    const { people } = this.props;

    return (
      <Card.Group stackable>
        {
          people.map(card => (
            <Card color="secondary">
              {card.image && <Image src={card.image} wrapped />}
              <Card.Content>
                <Card.Header>{card.header}</Card.Header>
                <Divider />
                <Card.Description>{card.description}</Card.Description>
                {card.content}
              </Card.Content>
              { card.link && 
              <Card.Content extra>
                <Button
                    primary
                    as='a' target="_blank"
                    href={card.link}
                    content='Read More'
                    icon='external alternate'
                    labelPosition='left'
                />
              </Card.Content> 
              }
            </Card>
          ))
        }
      </Card.Group>
    );
  }
}

export default PeopleCards;