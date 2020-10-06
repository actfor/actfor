import React, { Component } from 'react';

// semantic-ui
import {
  Dropdown
} from 'semantic-ui-react';

import resources from './resources';

class OtherResources extends Component {
  constructor(props) {
    super(props);
      this.state = {
        resourcesShown: resources,
      }
  }

  handleGenre = (e, { genre }) => {
    const newResources = resources.filter(res => res.genre == genre)
    this.setState({
      resourcesShown: newResources
    })
  }

  handleTopic = (e, { topic }) => {
    const newResources = resources.filter(res => res.topic == topic)
    this.setState({
      resourcesShown: newResources
    })
  }

  render() {
    const { resourcesShown } = this.state;

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
        <br />
        <br />
        {
          resourcesShown.map(res => {
            if (res.link) {
              return (
                <p>
                  <a href={res.link} target="_blank">
                    {res.title}
                  </a>
                </p>
              );
            } else {
              return (
                <p>
                  {res.title}
                </p>
              );
            }
          })
        }
      </div>
    );
  }
}

export default OtherResources;