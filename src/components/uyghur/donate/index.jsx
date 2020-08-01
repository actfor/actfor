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
import * as zahra from './../../../images/zahra.jpg';

class UyghurDonate extends Component {
  render() {

    const cards = [
      {
        header: 'Justice For All: Uyghur Project',
        img: uyghurJustice,
        link: 'https://www.monareliefye.org/',
        description: 'Yemen Organization for Humanitarian Relief and Development (Mona), is a national independent, non-governmental and non-profitable organization based in Yemen. The organization activities are mainly focused in the field of humanitarian relief and development by motivating and organizing volunteer, charitable and humanitarian work.'
      },
      {
        header: 'Uyghur Human Rights Project',
        img: uyghurRights,
        link: 'https://mwatana.org/en/',
        description: 'Mwatana is an independent Yemeni organization that advocates for human rights through the verification and documentation of violations, provision of legal support to victims, lobbying, as well as awareness raising and capacity building.'
      },
      {
        header: 'Campaign For Uyghurs',
        img: uyghurCampaign,
        link: 'https://www.oxfamamerica.org/explore/countries/yemen/',
        description: 'Oxfam is a global organization working to end the injustice of poverty. We help people build better futures for themselves, hold the powerful accountable, and save lives in disasters.'
      },
      {
        header: 'Uyghur American Association',
        img: uyghurAssociation,
        link: 'https://zahratrust.org/',
        description: 'The Zahra Trust was founded as a compassionate response to witnessing poverty first hand in the Middle East. It was established as a unique transparent organization that not only assists with the distribution of aid but also raises awareness of development, humanitarian and spiritual issues.'
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