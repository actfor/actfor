import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Card,
  Container,
  Divider,
  Image,
} from 'semantic-ui-react';

// images
import * as uyghurCampaign from './../../../images/uyghurCampaignLogo.jpg';
import * as uyghurAssociation from './../../../images/uyghurAssociationLogo.jpg';
import * as uyghurJustice from './../../../images/uyghurJusticeLogo.png';
import * as uyghurRights from './../../../images/uyghurRightsLogo.jpg';

class UyghurDonate extends Component {
  render() {

    const cards = [
      {
        header: 'Justice For All: Uyghur Project',
        img: uyghurJustice,
        link: 'https://www.justiceforall.org/save-uighur/',
        description: 'Justice For All (JFA) is a nonprofit organization based in Chicago with Consultative Status at the United Nations. JFA is focused on educating citizens about social justice concerns and providing guidance for action through regular newsletters and media engagement. Specifically, JFA aims to combat the rising trend of Islamophobia around the world impacting Muslim Americans and other Muslims around the world.'
      },
      {
        header: 'Uyghur Human Rights Project',
        img: uyghurRights,
        link: 'https://uhrp.org/',
        description: 'The Uyghur Human Rights Project promotes the rights of the Uyghurs and other Turkic Muslim peoples in East Turkistan, referred to by the Chinese government as the Xinjiang Uyghur Autonomous Region, through research-based advocacy. It publishes  reports and analysis in English and Chinese to defend Uyghurs’ civil, political, social, cultural, and economic rights according to international human rights standards.'
      },
      {
        header: 'Campaign For Uyghurs',
        img: uyghurCampaign,
        link: 'https://campaignforuyghurs.org/',
        description: 'Campaign for Uyghurs works to promote and advocate for the human rights and democratic freedoms for the Uyghurs and other Turkic people in East Turkistan. It mobilizes individuals and the international community and builds bridges to take action on behalf of and to raise public awareness of the Uyghur issue with a special focus on Uyghur women and youth, and to activate persons and entities to work together to stop the systematic human rights abuses against the people of East Turkistan.'
      },
      {
        header: 'Uyghur American Association',
        img: uyghurAssociation,
        link: 'https://uyghuraa.org/',
        description: 'The Uyghur American Association (UAA) is a non-partisan organization with the chief goals of promoting and preserving Uyghur culture and supporting the right of Uyghur people to use peaceful, democratic means to determine their own political futures.'
      }
    ];


    return (
      <Container>
        <Card.Group centered stackable>
          {cards.map(card => (
            <Card color="secondary">
              <Image src={card.img} wrapped />
              <Card.Content>
                <Card.Header>{card.header}</Card.Header>
                <Divider />
                <Card.Description>{card.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  primary
                  as='a' target="_blank"
                  href={card.link}
                  content='Visit Site'
                  icon='external alternate'
                  labelPosition='left'
                  />
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    );
  }
}

export default UyghurDonate;