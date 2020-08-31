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
      const { unscrollable } = this.props;

      if (unscrollable) {
        return;
      }
  
      const currentScrollPos = window.pageYOffset;
      const currentVisible = prevScrollpos > currentScrollPos;
      if (currentVisible) {
        this.setState({ prevScrollpos: currentScrollPos })
        return;
      }
  
      this.setState({
        prevScrollpos: currentScrollPos,
        visible: currentVisible,
      });
    };

  handleBtnClick = (e, { path }) => {
    const { history } = this.props;
    window.scrollTo(0, 0)
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

  showNav = () => {
    this.setState({ visible: true })
  }

  render() {

    const { rightMenu } = this.props;
    const { visible } = this.state;

    const numOfRight = rightMenu ? rightMenu.length : 0;
    const padding = 40 * (2 + numOfRight) + 60;

    const visibleStyle = {
      paddingBottom: `${padding}px`
    }

    const style = visible ? visibleStyle : { display: 'none' };

    return (
      <div>
        <Icon name="sidebar" size="big" onClick={this.showNav} />
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

            <Menu.Item
              id="elections"
              path="/elections"
              as='a'
              onClick={this.handleBtnClick}
            >
              <Icon name="check square outline" />
              Elections
            </Menu.Item>

            {rightMenu &&
              <Menu.Menu position="right">
                {this.renderMenu(rightMenu)}
              </Menu.Menu>
            }
          </Menu>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBarMobile);