import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

// semantic-ui
import { Dropdown } from 'semantic-ui-react';

class HomeDropdown extends Component {
  onChange = (e, { value }) => {
    this.props.history.push(`/${value}`)
  }

  render() {
    const options = [
      {
        key: 'yemen',
        value: 'yemen',
        text: 'Yemen'
      },
      {
        key: 'blm',
        value: 'blm',
        text: 'BLM'
      },
    ]

    return (
      <div>
        <Dropdown
          placeholder='Choose one'
          onChange={this.onChange}
          selection
          options={options}
        />
      </div>
    );
  }
}

export default withRouter(HomeDropdown);