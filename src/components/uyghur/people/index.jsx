import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Card,
  Container,
  Divider,
  Header,
  Image,
} from 'semantic-ui-react';

// components
import UyghurActivistsCards from './UyghurActivistsCards';


class UyghurPeople extends Component {
  render() {
    const stories = [
      {
        header: 'Mihrigul Tursun',
        description: 'Mihrigul Tursun is a young Uyghur mother who was detained and tortured by the Chinese government numerous times. After giving birth to triplets in Egypt and returning to China afterwards, the authorities arrested her at the airport. They separated her from her children and did not allow her to see them during her detention. Under the Chinese government’s negligent watch, Mihrigul’s son died in custody. She wasn’t allowed to see him at the hospital before he passed away. Although she was later able to escape custody, Mihrigul found out that her husband had been sentenced to 16 years in prison.',
        link: 'https://uhrp.org/news/uighur-survivor-story-videof',
      },
      {
        header: 'Tursunay Ziyawudun',
        description: 'Tursunay Ziyawudun is a 41-year-old Uyghur woman who spent a total of nine months at a Chinese concentration camp. During her time there, Tursunay witnessed authorities forcefully sterilize, rape, and torture inmates. She says that even after release, the willful neglect and abuse she and other detainees suffered at the hands of guards left lasting psychological and physical impacts.',
        link: 'https://www.rfa.org/english/news/uyghur/abuse-10302019142433.html',
      },
      {
        header: 'Zumrat Dawut',
        description: 'Zumrat Dawut is an Uyghur woman who was detained by Chinese authorities for 62 days. She explains that the business she ran with her husband was destroyed by the government. With the help of outside pressure from Pakistani diplomats, she was able to be released from the camps and eventually from China. Although she now safely resides in Virginia, Zumrat’s family and friends in East Turkestan will likely never see her again.',
        link: 'https://www.washingtonpost.com/video/world/first-she-survived-a-uighur-internment-camp-then-she-made-it-out-of-china/2019/11/17/a7a7639e-c003-4965-94a0-1944b5c40722_video.html',
      }
    ]

    const journalists = [
            {
              header: 'Gulmira Imin',
              description: 'Gulmira Imin is an Uyghur Muslim who was a moderator of Salkin, an Uyghur-language culture and news website. Many of her online writings and the posts on Salkin criticized government policies against Uyghurs. Following a demonstration protesting the death of Uyghur migrant workers, Chinese authorities arrested Imin for allegedly organizing the demonstration and leaking state secrets. Her family was not notified of her arrest and she was not allowed to meet with a lawyer before her trial. She was sentenced to life in prison in 2010 and has been tortured during her detention.',
            }
        ]

    return (
      <Container>
        <Header as="h1">
          People of the Uyghur Movement
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
        <UyghurActivistsCards />

        <Header as="h2">
          Journalists
        </Header>
        <Card.Group stackable>
          {
            journalists.map(card => (
              <Card color="secondary">
                {card.image && <Image src={card.image} wrapped />}
                <Card.Content>
                  <Card.Header>{card.header}</Card.Header>
                  <Divider />
                  <Card.Description>{card.description}</Card.Description>
                </Card.Content>
              </Card>
            ))
          }
        </Card.Group>

      </Container>
    );
  }
}

export default UyghurPeople;