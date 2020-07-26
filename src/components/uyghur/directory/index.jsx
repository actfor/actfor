import React, { Component } from 'react';

import DirectoryPage from './../../common/DirectoryPage';

class UyghurDirectory extends Component {
  render() {
    const pages = [
      {
        title: 'Education',
        icon: 'pencil',
        description: 'These pages are inteded to help you understand and learn more about the Uyghur Muslim genocide. This includes articles and access to other resources such as articles, books, and videos.'
      },
      {
        title: 'Public Pressure',
        icon: 'bullhorn',
        description: 'These pages will allow you to take action by contacting those in power who can impact the issue with the help of our message scripts.'
      },
      {
        title: 'People',
        icon: 'users',
        description: 'This page will inform you on the people impacting and lives impacted by the Uyghur Muslims crisis.',
      },
      {
        title: 'Boycott',
        icon: 'cancel',
        description: 'These pages will inform you on the companies that need to be boycotted due to their support of the Chinese\'s government.'
      },
      {
        title: 'Donate',
        icon: 'dollar',
        description: 'This page will help you find trusted sites where you can take finacial action to help the Uyghur Muslims.',
      },
    ];

    return (
      <div>
        <DirectoryPage pages={pages} />
      </div>
    );
  }
}

export default UyghurDirectory;