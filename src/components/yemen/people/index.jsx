import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Card,
  Container,
  Divider,
  Header,
} from 'semantic-ui-react';

// components
import ActivistsCards from './ActivistsCards';

class People extends Component {
  render() {
    const stories = [
      {
        header: 'Asma',
        description: 'Asma, a fifth grade student in Ajyal Al-Wehda School, experienced the detrimental effects of war on public schools in Yemen. Asma says she studied on stairs due to an insufficient number of classrooms. In addition, a lack of sanitation in schools meant that many students caught cholera.',
        link: 'http://pubdocs.worldbank.org/en/861341563799030822/Yemen-YECRP-brochure-eng.pdf',
      },
      {
        header: 'Muhtab Al-Beraik Salem',
        description: 'Muhtab Al-Beraik Salem, a Yemeni midwife for 30 years, has established a clinic in Al-Khaisa, a rural area in Yemen with little to no health services. Salem has dedicated her life to caring for women and children, and to save lives. Despite the sacrifices she has made to leave her family and work in an underserved area, Salem’s clinic has greatly enhanced healthcare in Al-Khaisa. Today, the clinic receives support from the Emergency health and Nutrition Project funded by the World Bank IDA.',
        link: 'https://www.unicef.org/yemen/stories/30-years-midwife',
      },
      {
        header: 'Samiah',
        description: 'Samiah, a mother of three children, felt safe in Hodeidah until conflict broke out in the region. After they fled Hodeidah, Samiah and her family faced extreme food insecurity issues, often unable to find enough food to eat. Samiah then found an opportunity to earn money from a non-profit organization by painting in her community. She paints schools, parks, and street curbs with “pride and dignity.”',
        link: 'http://pubdocs.worldbank.org/en/861341563799030822/Yemen-YECRP-brochure-eng.pdf',
      },
      {
        header: 'Siham',
        description: 'Siham is a 37-year-old mother who has been a community health worker since May of 2018. She works at a clinic in Mahweet helping malnourished children and mothers who do not have proper access to food due to the civil war. She uses her experience as a mother to bond and better communicate with other mothers who come to the clinic.',
        link: 'https://www.mercycorps.org/blog/stories-yemen-community-health',
      },
      {
        header: 'Shamia',
        description: 'Shamia is a 35-year-old mother of 8 children who met Siham when her 11-month-old child needed care for acute malnutrition. The war has impacted Shamia’s family greatly; they don’t have enough food to eat and they often resort to skipping meals or asking neighbors for food. She bonded with Siham at the Mahweet clinic while receiving key health and nutrition education from Siham.',
        link: 'https://www.mercycorps.org/blog/stories-yemen-community-health',
      }
    ]

    const journalists = [
      {
        header: 'Abdel Karim al-Khaiwani',
        description: 'Abdel Karim al-Khaiwani was a politician, human rights activist, and journalist. Al-Khawaini also made efforts towards peace in Yemen through his participation in the National Dialogue Conference and as a goodwill ambassador of the International Council for Human Rights in Yemen.  After Khaiwani published several articles critical of Saleh and Yemeni government corruption, government officials harassed, beat, searched, and imprisoned Saleh; on March 18 2015, three gunmen assassinated Khaiwani in his home.',
      },
      {
        header: 'Almigdad Mojalli',
        description: "Almigdad Mojalli was a journalist for The Daily Telegraph, Al Jazeera, IRIN for the UNited Nations, and Voice of America. His work focused on Yemen's humanitarian crisis and the impact of foreign intervention on Yemen. Accused as a spy for Saudi Arabia and the United States, Mojalli received threats of confinement from the Houthi government in 2016. On January 17, 2016, Mojalli was killed by a Saudi airstrike while on assignment to find witnesses of an airstrike that occurred the week before.",
      },
      {
        header: 'Jamal al-Sharabi',
        description: 'Jamal al-Sharabi was the first journalist to die covering the 2011 Yemen Spring Revolution. While Sharabi was reporting at Change Square in Sana’a, Yemen security forces shot into the crowd. In addition to 600 people injured, Sharabi was among 50 people killed by the security forces.',
      },
      {
        header: 'Jamal Khashoggi',
        description: 'Jamal Khashoggi was a columnist for The Washington Post and editor in chief of Al-Arab News Channel. Khashoggi was a known dissident of Saudi Arabia, criticizing Saudi-coalition intervention in Yemen and the actions of Muhammad bin Salman (MBS). He was assassinated at the Saudi consulate by Saudi agents on October 2, 2018, which led to international uproar.',
      },
      {
        header: 'Ziad al-Sharabi',
        description: 'Born in Taiz but raised and educated in Sana’a, Ziad al-Sharabi was a journalist for Abu Dhabi TV, a UAE run broadcaster. He was killed on January 28, 2019 by a Houthi set motorcycle bomb attack in Mokha.',
      }
    ]

    const academia = [
      {
        header: 'Yvonne McDermott Rees',
        content: (
          <div>
            <p>
              Dr. Yvonne McDermott Rees is a professor of law at Swansea University leading an <a href="https://www.technologyreview.com/2020/06/25/1004466/ai-could-help-human-rights-activists-prove-war-crimes/" target="_blank">initiative</a> on the use of AI to document war crimes in Yemen.
            </p>
          </div>
        ),
      }
    ]

    return (
      <Container>
        <Header as="h1">
          People of the Yemen Movement
        </Header>
        <Divider />

        <Header as="h2">
          Stories
        </Header>
        <Card.Group stackable>
        {
          stories.map(card => (
            <Card color="secondary">
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
                    content='Read More'
                    icon='external alternate'
                    labelPosition='left'
                />
              </Card.Content>
            </Card>
          ))
        }
        </Card.Group>

        <Header as="h2">
          Activists
        </Header>
        <ActivistsCards />

        <Header as="h2">
          Journalists
        </Header>
        <Card.Group stackable>
          {
            journalists.map(card => (
              <Card color="secondary">
                <Card.Content>
                  <Card.Header>{card.header}</Card.Header>
                  <Divider />
                  <Card.Description>{card.description}</Card.Description>
                </Card.Content>
              </Card>
            ))
          }
        </Card.Group>

        <Header as="h2">
          Academia
        </Header>
        <Card.Group stackable>
          {
            academia.map(card => (
              <Card color="secondary">
                <Card.Content>
                  <Card.Header>{card.header}</Card.Header>
                  <Divider />
                  <Card.Description>{card.content}</Card.Description>
                </Card.Content>
              </Card> 
            ))
          }
        </Card.Group>
      </Container>
    );
  }
}

export default People;