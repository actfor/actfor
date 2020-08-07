import React, { Component } from 'react';

// semantic-ui
import {
  Dropdown,
  Header,
  Select,
} from 'semantic-ui-react';

// utils
import states from './utils/states';

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
    console.log('state', this.state);
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
      </div>
    );
  }
}

export default PressureState;