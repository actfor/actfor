import React, { Component } from 'react';

// semantic-ui
import {
  Container,
  Image,
  Header,
  Select,
} from 'semantic-ui-react';

// utils
import states from './utils/states';

// components
import StateMessage from './state/StateMessage';

// images
import * as statesImg from './state/images/states.png';

class PressureState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  onChange = (_, { value }) => {
    this.setState({ selected: value })
  }

  render() {
    const { selected } = this.state;
    return (
      <div>
        <Header>
          <Header.Subheader>Find and select a state</Header.Subheader>
        </Header>
        <Select
          fluid
          selection
          search
          selectOnBlur={false}
          placeholder='Choose your state'
          onChange={this.onChange}
          options={states}
        />
        {
          selected ?
          <StateMessage state={selected} /> :
          <Container>
            <br />
            <br />
            <Image centered src={statesImg} size="big" />
          </Container>
        }
      </div>
    );
  }
}

export default PressureState;