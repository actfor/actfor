import React, { Component } from 'react';

// semantic-ui
import {
  Input,
  Segment
} from 'semantic-ui-react';

// components
import CopyMessage from './../../CopyMessage';

// messages
import { mediaMessage } from './messages';

class PressureMedia extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: ''
    }
  }

  handleTextChange = (e, {id , value}) => {
    this.setState({
      [id]: value,
    })
  }

  render() {
    const { name, location } = this.state;

    return (
      <Segment.Group style={{ marginRight: '12px', marginBottom: '24px' }}>
        <Segment>
          <Input
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={this.handleTextChange}
          />
          <br />
          <br />
          <Input
            id="location"
            placeholder="State, Zipcode"
            value={location}
            onChange={this.handleTextChange}
          />
        </Segment>

        <Segment>
          <CopyMessage id="mediaMessage" message={mediaMessage(name, location)}/>
        </Segment>

        <Segment>
          {mediaMessage(name, location)}
        </Segment>
      </Segment.Group>
    );
  }
}

export default PressureMedia;