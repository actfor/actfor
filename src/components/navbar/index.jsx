import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

// semantic-ui
import {
  Dropdown,
  Icon,
  Image,
  Menu,
} from 'semantic-ui-react';

// images
import * as logo from './../../images/logo.png'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleBtnClick = (e, { path }) => {
    const { history } = this.props
    if (!path) {
      history.push('/');
    }
    history.push(path);
  }

  handleDropClick = (e, { id }) => {
    this.setState({
      [id]: true,
    })
  }

  handleDropClose = (e, { id }) => {
    this.setState({
      [id]: false,
    })
  }

  renderMenu = (menu) => (
    menu.map(item => {
      if (item.dropdown) {
        return (
          <Menu.Item
            id={item.id}
            onClick={this.handleDropClick}
          >
            <Icon name={item.icon} />
            {item.content}
            <Dropdown
              inline
              text={null}
              id={item.id}
              open={this.state[item.id]}
              onClick={this.handleDropClick}
              onClose={this.handleDropClose}
            >
              <Dropdown.Menu>
                {item.dropdown.map(drop => (
                  <Dropdown.Item
                    as="a"
                    id={drop.path}
                    text={drop.text}
                    path={drop.path}
                    onClick={this.handleBtnClick}
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        );
      } else {
        return (
        <Menu.Item
          as='a'
          id={item.id}
          path={item.path}
          onClick={this.handleBtnClick}
        >
          <Icon name={item.icon} />
          {item.content}
        </Menu.Item>
        );
      }
    })
  )

  render() {

    const { rightMenu } = this.props;

    return (
      <div style={{ paddingBottom: '94px' }}>
        <Menu fixed="top" inverted color="blue" icon="labeled">

          <Menu.Item
            header
            // fitted="vertically"
          >
            <Image src={logo} size="small" />
          </Menu.Item>
          
          <Menu.Item
            id="home"
            path="/"
            as='a'
            onClick={this.handleClick}
          >
            <Icon name="home" />
            Home
          </Menu.Item>

          <Menu.Item
            id="about"
            path="/about"
            as='a'
            onClick={this.handleClick}
          >
            <Icon name="globe" />
            About Us
          </Menu.Item>

          <Menu.Item
            id="contact"
            path="/contact"
            as='a'
            onClick={this.handleClick}
          >
            <Icon name="phone" />
            Contact Us
          </Menu.Item>

          {rightMenu &&
            <Menu.Menu position="right">
              {this.renderMenu(rightMenu)}
            </Menu.Menu>
          }

        </Menu>
      </div>
    );
  }
}

export default withRouter(NavBar);