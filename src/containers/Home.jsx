import React, { Component } from 'react';

// semantic-ui
import { Menu } from 'semantic-ui-react';

// components
import NavBar from './../components/navbar';
import HomeDropdown from './../components/home/HomeDropdown';

class Home extends Component {
    render() {
        return (
            <div>
              <NavBar />
              <HomeDropdown />
            </div>
        );
    }
}

export default Home;