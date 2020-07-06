import React, { Component } from 'react';

// semantic-ui
import {
  Input,
  Segment
} from 'semantic-ui-react';

// components
import CopyMessage from './../../CopyMessage';

// messages
import { whiteHouseMessage } from './messages';

class PressureWhiteHouse extends Component {

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
          <CopyMessage id="whiteHouseMessage" message={whiteHouseMessage(name, location)}/>
        </Segment>

        <Segment>
          {whiteHouseMessage(name, location)}
        </Segment>
      </Segment.Group>
    );
  }
}

export default PressureWhiteHouse;