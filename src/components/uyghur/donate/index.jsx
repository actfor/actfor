import React, { Component } from 'react';

// component
import DonatePage from './../../common/DonatePage';

class UyghurDonate extends Component {
  render() {
    const cards = [
      {
        header: 'Campaign for Uyghurs',
        link: 'https://campaignforuyghurs.org/',
      },
      {
        header: 'Justice for All: Uyghur Project',
        link: 'https://www.justiceforall.org/save-uighur/',
      },
      {
        header: 'Uyghur Human Rights Project',
        link: 'https://uhrp.org/',
      },
      {
        header: 'Uyghur American Association',
        link: 'https://uyghuraa.org/',
      },
    ];

    return (
      <div>
        <DonatePage header="Donate" subheader="Donate to help the Uyghur Muslims" cards={cards} />
      </div>
    );
  }
}

export default UyghurDonate;