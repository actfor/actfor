import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Card,
  Divider,
  Image,
} from 'semantic-ui-react';

// images
import * as mona from './../../../images/mona.png';
import * as mwatana from './../../../images/mwatana.jpg';
import * as oxfam from './../../../images/oxfam.png';
import * as unicef from './../../../images/unicef.png';
import * as zahra from './../../../images/zahra.jpg';

class Donate extends Component {
  render() {

    const cards = [
      {
        header: 'Mona Relief',
        img: mona,
        link: 'https://www.monareliefye.org/'
      },
      {
        header: 'Mwatana for Human Rights',
        img: mwatana,
        link: 'https://mwatana.org/en/',
      },
      {
        header: 'Oxfam',
        img: oxfam,
        link: 'https://www.oxfamamerica.org/explore/countries/yemen/',
      },
      {
        header: 'UNICEF Yemen',
        img: unicef,
        link: 'https://www.unicef.org/yemen/',
      },
      {
        header: 'Zahra Trust',
        img: zahra,
        link: 'https://zahratrust.org/',
      }
    ];


    return (
      <div>
        <Card.Group stackable>
          {cards.map(card => (
            <Card color="secondary">
              <Image src={card.img} wrapped />
              <Card.Content>
                <Card.Header>{card.header}</Card.Header>
                <Divider />
                <Button
                  secondary
                  as='a' target="_blank"
                  href={card.link}
                  content='Visit Site'
                  icon='external alternate'
                  labelPosition='left'
                ></Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    );
  }
}

export default Donate;