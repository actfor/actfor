import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Card,
  Divider,
  Dropdown,
  Icon
} from 'semantic-ui-react';

import resources from './resources';

class OtherResources extends Component {
  constructor(props) {
    super(props);
      this.state = {
        resourcesShown: resources,
        filterSelected: '',
      }
  }

  handleGenre = (e, { genre }) => {
    const newResources = resources.filter(res => res.genre == genre)
    this.setState({
      resourcesShown: newResources,
      filterSelected: 'genre',
    })
  }

  handleTopic = (e, { topic }) => {
    const newResources = resources.filter(res => res.topic == topic)
    this.setState({
      resourcesShown: newResources,
      filterSelected: 'topic',
    })
  }

  handleClear = () => {
    this.setState({
      resourcesShown: resources,
      filterSelected: '',
    })
  }

  render() {
    const { resourcesShown, filterSelected } = this.state;

    const genres = [...new Set(resources.map(res => res.genre))]
    const topics = [...new Set(resources.map(res => res.topic))]
    return (
      <div>
        <Dropdown
          className='icon'
          text='Filter'
          icon='filter'
          scrolling
          floating
          labeled
          button
          primary
        >
          <Dropdown.Menu>
            <Dropdown.Header icon='tags' content='Filter by genre' />
            { genres.map(genre =>
                <Dropdown.Item genre={genre} onClick={this.handleGenre}>{genre}</Dropdown.Item>
              )
            }
            <Dropdown.Header icon='tags' content='Filter by topic' />
            { topics.map(topic =>
                <Dropdown.Item topic={topic} onClick={this.handleTopic}>{topic}</Dropdown.Item>
              )
            }
          </Dropdown.Menu>
        </Dropdown>
        <Button.Group floated="right">
          <Button
            icon
            labelPosition="left"
            onClick={this.handleClear}
          >
            <Icon name="window close" />
            Clear Filters
          </Button>
        </Button.Group>
        <br />
        <br />
        <Card.Group doubling itemsPerRow={3} stackable>
          {
            resourcesShown.map(res => ( 
              <Card color="secondary">
                <Card.Content>
                  <Card.Header>{res.title}</Card.Header>
                  <Divider />
                  <Card.Description>
                    <p style={{ fontWeight: filterSelected == 'genre' ? 'bold' : 'normal' }}>
                      <b>Genre: </b> {res.genre}
                    </p>
                    <p style={{ fontWeight: filterSelected == 'topic' ? 'bold' : 'normal' }}>
                      <b>Topic: </b> {res.topic}
                    </p>
                  </Card.Description>
                </Card.Content>
                {
                  res.link &&
                  <Card.Content extra>
                    <Button
                      primary
                      as='a' target="_blank"
                      href={res.link}
                      content={res.genre == 'Videos' ? 'Watch Here' : 'Read More'}
                      icon='external alternate'
                      labelPosition='left'
                    />
                  </Card.Content>
                }
              </Card>
            ))
          }
        </Card.Group>
      </div>
    );
  }
}

export default OtherResources;