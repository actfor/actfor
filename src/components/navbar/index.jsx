import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

// semantic-ui
import { Menu, Icon, Image } from 'semantic-ui-react';

class NavBar extends Component {
  handleClick = (e, { id }) => {
    const { history } = this.props
    
    switch (id) {
      case "home":
        history.push('/')
        break;
      
      case "about":
        history.push('/about')
        break;

      case "contact":
        history.push('/contact')
        break;
      
      default:
        break;
    }
  }

  render() {
    return (
      <div style={{ paddingBottom: '94px' }}>
        <Menu fixed="top" inverted color="blue" icon="labeled">
          
          <Menu.Item
            id="home"
            as='a'
            onClick={this.handleClick}
          >
            <Icon name="home" />
            Home
          </Menu.Item>

          <Menu.Item
            id="about"
            as='a'
            onClick={this.handleClick}
          >
            <Icon name="globe" />
            About Us
          </Menu.Item>

          <Menu.Item
            id="contact"
            as='a'
            onClick={this.handleClick}
          >
            <Icon name="phone" />
            Contact Us
          </Menu.Item>

        </Menu>
      </div>
    );
  }
}

export default withRouter(NavBar);