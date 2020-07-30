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
import * as img1 from './images/1.png';
import * as img2 from './images/2.png';
import * as img3 from './images/3.png';
import * as img4 from './images/4.png';
import * as img5 from './images/5.png';
import * as img6 from './images/6.png';
import * as img7 from './images/7.png';

import * as book from './images/book.jpg';

class UyghurResources extends Component {
  renderCards = (cards) => (
    cards.map(card => (
      <Card color="secondary">
        <Image src={card.img} wrapped />
        <Card.Content>
          {/* <Card.Header>{card.header}</Card.Header> */}
          <Card.Description>{card.description}</Card.Description>
          <Card.Description style={{ color: 'red' }}>{card.disclaimer}</Card.Description>
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
    const academia = [
      {
        img: img6,
        link: 'https://www.tandfonline.com/doi/full/10.1080/10670560701562333?casa_token=g3OkYuQ6ouQAAAAA%3AHDV1Cf1Rp8UrZOGWsZ-pSSvkrAil_nj5D1wk5xQf4Xlm0UILhkNKo6BZ38YbsRnbmKDlr7ZcWYkSgcQ'
      },
      {
        img: img7,
        link: 'https://digitalcommons.wcl.american.edu/cgi/viewcontent.cgi?referer=https://scholar.google.com/&httpsredir=1&article=1474&context=hrbrief',
      }
    ]

    const articles = [
      {
        img: img1,
        link: 'https://www.bbc.com/news/world-asia-china-45474279'
      },
      {
        img: img2,
        link: 'https://www.npr.org/2020/07/04/887239225/china-suppression-of-uighur-minorities-meets-u-n-definition-of-genocide-report-s',
      },
      {
        img: img3,
        link: 'https://www.forbes.com/sites/jackkelly/2020/03/05/china-moves-uyghur-muslims-into-forced-labor-factories/#68edb4a944e5'
      },
      {
        img: img4,
        link: 'https://www.aljazeera.com/news/2020/07/china-hit-sanctions-uighur-rights-200710085944675.html'
      },
      {
        img: img5,
        link: 'https://www.cbsnews.com/news/china-uighur-muslims-forced-birth-control-demographic-genocide-experts-tell-ap/'
      },
    ]

    const books = [
      {
        img: book,
        description: 'Dragon Fighter: One Woman\'s Epic Struggle for Peace With China by Rebiya Kadeer',
        link: 'https://www.amazon.com/Dragon-Fighter-Womans-Struggle-Peace/dp/0979845653'
      }
    ]

    return (
      <div>
        <Header as="h1">
          Resources on the Uyghur Muslims
        </Header>
        <Divider />
        <Header as="h2">
          Academia
        </Header>
        <Card.Group stackable>
          {this.renderCards(academia)}
        </Card.Group>

        <Header as="h2">
          Articles
        </Header>
        <Card.Group stackable>
          {this.renderCards(articles)}
        </Card.Group>


        <Header as="h2">
          Books
        </Header> 
        <Card.Group stackable>
          {this.renderCards(books)}
        </Card.Group>   

        <Header as="h2">
          Videos
        </Header> 
        <Header as="h3">
          China & Uighurs: Last Week Tonight with John Oliver (HBO)
        </Header>
        <Embed
          active
          autoplay={false}
          source="youtube"
          id="17oCQakzIl8"
          aspectRatio="21:9"
        />   

      </div>
    );
  }
}

export default UyghurResources;