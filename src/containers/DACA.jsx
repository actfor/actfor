import React, { Component } from 'react';

// semantic-ui
import {
  Divider,
  Header,
} from 'semantic-ui-react';

// components
import NavBar from '../components/navbar';
import DACAPages from '../components/daca';

class DACA extends Component {
  render() {
    const rightMenu = [
      {
        id: 'education',
        content: 'Education',
        icon: 'pencil',
        dropdown: [
          {
            text: 'Resources',
            path: '/daca/education/resources',
          },
        ],
      },
      {
        id: 'pressure',
        content: 'Public Pressure',
        icon: 'bullhorn',
        dropdown: [
          {
            text: 'Pressure Congress',
            path: '/daca/pressure/congress',
          },
        ],
      },
      {
        id: 'people',
        content: 'People',
        icon: 'users',
        path: '/daca/people',
      },
      {
        id: 'donate',
        content: 'Donate',
        icon: 'dollar',
        path: '/daca/donate'
      },
    ];
    return (
      <div>
        <NavBar rightMenu={rightMenu} />
        <Header as="h1">
          DACA and Abolish ICE
        </Header>
        <Divider />
        <DACAPages />
      </div>
    );
  }
}

export default DACA;
