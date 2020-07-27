import React, { Component } from 'react';

import DirectoryPage from './../../common/DirectoryPage';

class YemenDirectory extends Component {
  render() {
    const pages = [
      {
        title: 'Education',
        icon: 'pencil',
        description: 'These pages are intended to help you understand and learn more about the Yemen crisis. This includes articles and access to other resources such as articles, books, and videos.',
      },
      {
        title: 'Public Pressure',
        icon: 'bullhorn',
        description: 'These pages will allow you to take action by contacting those in power who can impact the Yemen issue with the help of our message scripts.',
      },
      {
        title: 'People',
        icon: 'users',
        description: 'This page will inform you on the people impacting and lives impacted by the Yemen crisis.'
      },
      {
        title: 'Donate',
        icon: 'dollar',
        description: 'This page will help you find trusted sites where you can take financial action towards the Yemen crisis.',
      },
    ]
    return (
      <div>
        <DirectoryPage pages={pages} />
      </div>
    );
  }
}

export default YemenDirectory;