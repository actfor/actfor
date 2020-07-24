import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

// semantic-ui
import {
  Dropdown,
  Image
} from 'semantic-ui-react';

// images
import * as title from './../../images/title.png'

class HomeDropdown extends Component {
  onChange = (e, { value }) => {
    this.props.history.push(`/${value}`)
  }

  render() {
    const options = [
      {
        key: 'yemen',
        value: 'yemen/education/crisis',
        text: 'Yemen'
      },
      {
        key: 'uyghur',
        value: 'uyghur/education/nowthis',
        text: 'Uyghur Muslims'
      }
    ]

    const style = {
      backgroundColor: '#88060d',
      textAlign: 'center',
      padding: '24px',
      borderRadius: '24px'
    };

    return (
      <div style={style}>
        <Image centered src={title} size="medium" />
        <br />
        <br />
        <Dropdown
          fluid
          selection
          search
          placeholder='Choose one'
          onChange={this.onChange}
          options={options}
        />
      </div>
    );
  }
}

export default withRouter(HomeDropdown);