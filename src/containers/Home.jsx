import React, { Component } from 'react';

// semantic-ui
import { Menu } from 'semantic-ui-react';

// components
import NavBar from './../components/navbar';
import PageSwitches from './../components/home/PageSwitches';

class Home extends Component {
    render() {
        return (
            <div>
              <NavBar />
              Home
              <PageSwitches />
            </div>
        );
    }
}

export default Home;