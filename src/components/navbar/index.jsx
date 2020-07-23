import React, { Component } from 'react';

// navbars
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="desktop">
          <NavBarDesktop {...this.props }/>
        </div>
        <div className="mobile">
          <NavBarMobile {...this.props} />
        </div>
      </div>
    );
  }
}

export default NavBar;