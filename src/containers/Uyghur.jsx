import React, { Component } from 'react';

// semantic-ui
import {
  Divider,
  Header,
} from 'semantic-ui-react';

// components
import NavBar from './../components/navbar';
import UyghurPages from '../components/uyghur';

class Uyghur extends Component {
  render() {
    const rightMenu = [
      {
        id: 'education',
        content: 'Education',
        icon: 'pencil',
        path: '/uyghur/education',
      },
      {
        id: 'pressure',
        content: 'Public Pressure',
        icon: 'bullhorn',
        path: '/uyghur/pressure',
      },
      {
        id: 'people',
        content: 'People',
        icon: 'users',
        path: '/uyghur/people',
      },
      {
        id: 'boycott',
        content: 'Boycott',
        icon: 'cancel',
        path: '/uyghur/boycott',
      },
      {
        id: 'donate',
        content: 'Donate',
        icon: 'dollar',
        path: '/uyghur/donate'
      },
    ];

    return (
      <div>
        <NavBar rightMenu={rightMenu} />
        <Header as="h1">
          Uyghur Muslims
        </Header>
        <Divider />
        <UyghurPages />
      </div>
    );
  }
}

export default Uyghur;