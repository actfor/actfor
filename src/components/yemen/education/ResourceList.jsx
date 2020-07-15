import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Card,
  Divider,
  Embed,
  Header,
  Image,
} from 'semantic-ui-react';

// images
import * as houthis from './images/1.png';
import * as caard from './images/2.png';
import * as healthreport from './images/3.png';
import * as rightsreport from './images/4.png';
import * as greenmatters from './images/5.png';
import * as mit from './images/6.png';
import * as airstrike from './images/7.png';

import * as book1 from './images/book1.jpg';

class ResourceList extends Component {
  renderCards = (cards) => (
    cards.map(card => (
      <Card color="secondary">
        <Image src={card.img} wrapped />
        <Card.Content>
          <Card.Header>{card.header}</Card.Header>
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
            ></Button>
        </Card.Content>
      </Card>
    ))
  );

  render() {

    const articles = [
      {
        header: "Iran's Yemeni Houthis Policy",
        description: "Iran's interests in Yemen are limited, while the constraints on its ability to project power in the country are unlikely to be lifted. Tehran saw with the rise of the Houthis a low cost opportunity to gain some leverage in Yemen. It is unwilling, however, to invest larger amounts of resources. There is, as a result, only limited potential for Iran to further penetrate Yemen.",
        img: houthis,
        link: 'https://doi.org/10.1111/1468-2346.12599',
      },
      {
        header: 'Yemeni Health Crisis',
        description: 'Despite being a completely treatable disease, thousands of people have died from the outbreak of cholera unleashed in Yemen in 2017. The health care system has been decimated by years of unrelenting war. Supplies and medical care are scarce as is the access to drinking water and sanitation.',
        img: healthreport,
        link: 'https://www.icrc.org/en/where-we-work/middle-east/yemen/health-crisis-yemen',
      },
      {
        header: 'Yemen Human Rights Violations',
        description: 'The armed conflict in Yemen has resulted in the largest humanitarian crisis in the world; parties to the conflict have killed and injured thousands of Yemeni civilians. According to the Yemen Data Project, more than 17,500 civilians were killed and injured since 2015, and a quarter of all civilians killed in air raids were women and children. More than 20 million people in Yemen are experiencing food insecurity; 10 million of them are at risk of famine.',
        img: rightsreport,
        link: 'https://www.hrw.org/world-report/2020/country-chapters/yemen',
      },
      {
        header: 'Yemen Humanitarian Crisis',
        description: 'Yemen is experiencing what many describe as the worst humanitarian crisis on the planet — and it’s being made even worse by the coronavirus pandemic. Between the civil war, high rates of hunger and food insecurity, a cholera epidemic, and more, Yemen is in serious need of humanitarian aid from those who have the resources to help.',
        img: greenmatters,
        link: 'https://www.greenmatters.com/p/yemen-humanitarian-crisis-how-to-help',
      },
      {
        header: 'Using AI to Prove Yemen War Crimes',
        description: 'It would take years for humans to scour the tens of thousands of hours of footage that document violations in Yemen. With machine learning, it takes just days.',
        img: mit,
        link: 'https://www.technologyreview.com/2020/06/25/1004466/ai-could-help-human-rights-activists-prove-war-crimes',
      },
      {
        header: 'GLAN Yemen Airstrike Database',
        description: 'By some counts, there have been over 20,000 airstrikes since the beginning of the Saudi/UAE-led coalition’s air campaign in Yemen. A huge proportion are alleged to have destroyed civilian property and killed civilians in violation of international humanitarian law.',
        img: airstrike,
        link: 'https://www.glanlaw.org/airstrike-evidence-database-yemen',
      }
    ];

    const books = [
      {
        header: 'Destroying Yemen',
        description: 'What Chaos in Arabia Tells Us about the World',
        img: book1,
        link: 'https://b-ok.cc/book/3492792/bce93c',
      }
    ];

    const extra = [
      {
        header: 'Extended List of Resources',
        description: 'Another great site that consolidates more resources in helping Yemen!',
        img: caard,
        link: 'https://yemencrisis.carrd.co/',
      },
    ];

    return (
      <div>
        <Header as="h1">
          Articles
        </Header>
        <Card.Group stackable>
          {this.renderCards(articles)}
        </Card.Group>

        <Header as="h1">
          Books
        </Header>
        <Card.Group stackable>
          {this.renderCards(books)}
        </Card.Group>

        <Header as="h1">
          Extra
        </Header>
        <Card.Group stackable>
          {this.renderCards(extra)}
        </Card.Group>

        <Divider />
        <Header as="h1">
          Videos
        </Header>
        <Header as="h3">Al-Jazeera: Explainer: The War in Yemen Explained in 3 minutes</Header>
        <Embed
          active
          autoplay={false}
          source="youtube"
          id="nLRgdFP-s30"
        />
      </div>
    );
  }
}

export default ResourceList;