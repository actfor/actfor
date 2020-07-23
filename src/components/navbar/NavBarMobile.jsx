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

class NavBarMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    }
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

    // Hide or show the menu.
    handleScroll = () => {
      const { prevScrollpos } = this.state;
  
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollpos > currentScrollPos;
  
      this.setState({
        prevScrollpos: currentScrollPos,
        visible
      });
    };

  handleBtnClick = (e, { path }) => {
    const { history } = this.props;
    
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
              fluid
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
    const { visible } = this.state;

    const visibleStyle = {
      paddingBottom: '220px'
    }
    const invisStyle = {
      ...visibleStyle,
      visibility: 'hidden',
    }
    const style = visible ? visibleStyle : invisStyle;

    return (
      <div style={style}>
        <Menu stackable fixed="top" inverted color="primary">

          <Menu.Item
            header
          >
            <div style={{ paddingTop: '12px' }}>
              <Image src={logo} size="mini" />
            </div>
          </Menu.Item>
          
          <Menu.Item
            id="home"
            path="/"
            as='a'
            onClick={this.handleBtnClick}
          >
            <Icon name="home" />
            Home
          </Menu.Item>

          <Menu.Item
            id="about"
            path="/about"
            as='a'
            onClick={this.handleBtnClick}
          >
            <Icon name="globe" />
            About Us
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

export default withRouter(NavBarMobile);