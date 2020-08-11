import React, { Component } from 'react';

// semantic-ui
import {
  Dropdown,
  Header,
  Select,
} from 'semantic-ui-react';

// utils
import states from './utils/states';

// components
import StateMessage from './state/StateMessage';

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
    console.log('selected', selected);
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
        <StateMessage state={selected} />
      </div>
    );
  }
}

export default PressureState;