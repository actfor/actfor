import React, { Component } from 'react';

// semantic-ui
import {
  Divider,
  Header,
} from 'semantic-ui-react';

// components
import NavBar from './../components/navbar';
import BLMPages from './../components/blm';

class BLM extends Component {
  render() {
    const rightMenu = [
      {
        id: 'education',
        content: 'Education',
        icon: 'pencil',
        dropdown: [
          {
            text: 'Data for Defundng',
            path: '/blm/education/datafordefunding',
          },
          {
            text: 'Other Resources',
            path: '/blm/education/resources',
          }
        ],
      },
      {
        id: 'pressure',
        content: 'Public Pressure',
        icon: 'bullhorn',
        dropdown: [
          {
            text: 'Pressure Congress',
            path: '/blm/pressure/congress',
          },
          {
            text: 'Pressure Your State',
            path: '/blm/pressure/state',
          },
          {
            text: 'Pressure Cities',
            path: '/blm/pressure/cities',
          },
          {
            text: 'Case Specific Details',
            path: '/blm/pressure/cases'
          },
          {
            text: 'Petitions',
            path: '/blm/pressure/petitions',
          }
        ],
      },
      {
        id: 'people',
        content: 'People',
        icon: 'users',
        path: '/blm/people',
      },
      {
        id: 'donate',
        content: 'Donate',
        icon: 'dollar',
        path: '/blm/donate'
      },
    ];
    return (
      <div>
        <NavBar rightMenu={rightMenu} />
        <Header as="h1">
          Black Lives Matter
        </Header>
        <Divider />
        <BLMPages />
      </div>
    );
  }
}

export default BLM;
