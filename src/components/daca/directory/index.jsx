import React, { Component } from 'react';

import DirectoryPage from './../../common/DirectoryPage';

class DACADirectory extends Component {
  render() {
    const pages = [
      {
        title: 'Education',
        icon: 'pencil',
        description: 'These pages are intended to help you understand and learn more about the Black Lives Matter movement. This includes articles and access to other resources such as articles, books, and videos.',
      },
      {
        title: 'Public Pressure',
        icon: 'bullhorn',
        description: 'These pages will allow you to take action by contacting those in power who can impact the racial injustice in America with the help of our message scripts.',
      },
      {
        title: 'People',
        icon: 'users',
        description: 'This page will inform you on the people involved in the Black Lives Matter movement.'
      },
      {
        title: 'Donate',
        icon: 'dollar',
        description: 'This page will help you find trusted sites where you can take financial action towards the movement.',
      },
    ]
    return (
      <div>
        <DirectoryPage pages={pages} />
      </div>
    );
  }
}

export default DACADirectory;