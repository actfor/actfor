import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

// semantic-ui
import {
  Dropdown,
} from 'semantic-ui-react';

// images
import * as title from './../../images/title.png'

class HomeDropdown extends Component {
  onChange = (e, { value }) => {
    this.props.history.push(`/${value}`)
    window.scrollTo(0, 0)
  }

  render() {
    const options = [
      // {
      //   key: 'blm',
      //   value: 'blm',
      //   text: 'Black Lives Matter',
      // },
      {
        key: 'yemen',
        value: 'yemen',
        text: 'Yemen'
      },
      {
        key: 'uyghur',
        value: 'uyghur',
        text: 'Uyghur Muslims'
      },
    ]

    options.sort((a, b) => {
      if(a.text < b.text) { return -1; }
      if(a.text > b.text) { return 1; }
      return 0;
    })

    const style = {
      backgroundColor: '#88060d',
      textAlign: 'center',
      padding: '24px',
      borderRadius: '24px'
    };

    return (
      <div style={style}>
        <Dropdown
          fluid
          selection
          search
          selectOnBlur={false}
          placeholder='Choose one'
          onChange={this.onChange}
          options={options}
        />
      </div>
    );
  }
}

export default withRouter(HomeDropdown);