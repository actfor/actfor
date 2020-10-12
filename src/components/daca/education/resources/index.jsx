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
import * as landgraves from './images/graves.jpg';
import * as define from './images/define.png';
import * as abolish from './images/abolish.png';
import * as min from './images/3min.jpg';
import * as time from './images/time.png';
import * as documented1 from './images/documented1.jpg';
import * as undoc from './images/undoc.jpeg';
import * as nomore from './images/nomore.png';
import * as lawfare from './images/lawfare.png';
import * as npr from './images/npr.png';
import * as bipart from './images/bipart.png';
import * as united from './images/united.png';
import * as rethinking from './images/rethinking.png';
import * as atlantic from './images/atlantic.png';
import * as deserves from './images/deserves.png';
import * as explained from './images/explained.png';
import * as reunion from './images/reunion.png';
import * as funnel from './images/funnel.png';
import * as locopo from './images/locopo.png';
import * as fear from './images/fear.png';
import * as nilc from './images/nilc.png';
import * as shines from './images/shines.png';
import * as think from './images/think.png';
import * as rnr from './images/rnr.png';
import * as lang from './images/lang.png';


class DACAResources extends Component {
  renderCards = (cards) => (
    <Card.Group stackable itemsPerRow={3} doubling>
      {
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
      }
    </Card.Group>
  );

  render() {
    const movements = [
      {
        img: explained,
        link: 'https://www.vox.com/policy-and-politics/2018/3/19/17116980/ice-abolish-immigration-arrest-deport'
      },
      {
        img: deserves,
        link: 'https://www.washingtonpost.com/blogs/post-partisan/wp/2018/03/13/of-course-democrats-should-want-to-abolish-ice/%3Fnoredirect=on%26utm_term=.8650d3ff6fb0'
      },
      {
        img: think,
        link: 'https://www.nbcnews.com/think/opinion/fighting-dehumanizing-u-s-immigration-system-lee-gelernt-podcast-transcript-ncna880021'
      },
      {
        img: lang,
        link: 'https://www.washingtonpost.com/politics/language-as-a-weapon-in-trump-era-immigration-debate-grows-more-heated-over-what-words-to-use/2018/01/21/d5d9211a-fd6a-11e7-a46b-a3614530bd87_story.html'
      },
      {
        img: rnr,
        link: 'https://www.riseandresist.org/abolishice'
      },
      {
        img: rethinking,
        link: 'https://www.migrationpolicy.org/programs/us-immigration-policy-program/rethinking-us-immigration'
      },
      {
        img: time,
        link: 'https://www.thenation.com/article/archive/its-time-to-abolish-ice/'
      },
      {
        img: atlantic,
        link: 'https://www.theatlantic.com/politics/archive/2018/07/what-abolish-ice-actually-means/564752/'
      },
      {
        img: abolish,
        link: 'https://www.brennancenter.org/our-work/analysis-opinion/abolish-ice-movement-explained'
      },
      {
        img: nomore,
        link: 'https://www.vox.com/policy-and-politics/21366213/trump-immigration-policy-second-term'
      },
    ]

    const academia = [
      {
        img: define,
        link: 'https://www.defineamerican.com/'
      },
      {
        img: united,
        link: 'https://unitedwedream.org/tools/research/'
      },
    ]

    const articles = [
      {
        img: funnel,
        link: 'https://www.nilc.org/issues/immigration-enforcement/localjusticeandice/'
      },
      {
        img: locopo,
        link: 'https://www.washingtonpost.com/immigration/ice-provides-local-police-a-way-to-work-around-sanctuary-policies-act-as-immigration-officers/2019/05/06/f651ff38-7029-11e9-9eb4-0828f5389013_story.html'
      },
    ]

    const camps = [
      {
        img: fear,
        link: 'https://www.nytimes.com/2020/06/04/magazine/covid-ice.html'
      },
      {
        img: nilc,
        link: 'https://www.nilc.org/2020/06/25/2-bills-1st-step-to-address-exclusion-of-imm-families-from-covid-relief/'
      },
      {
        img: shines,
        link: 'https://www.hrw.org/news/2020/04/30/us-new-report-shines-spotlight-abuses-and-growth-immigrant-detention-under-trump#'
      },
    ]

    const human = [
      {
        img: fear,
        link: 'https://www.nytimes.com/2020/06/04/magazine/covid-ice.html'
      },
      {
        img: nilc,
        link: 'https://www.nilc.org/2020/06/25/2-bills-1st-step-to-address-exclusion-of-imm-families-from-covid-relief/'
      },
      {
        img: shines,
        link: 'https://www.hrw.org/news/2020/04/30/us-new-report-shines-spotlight-abuses-and-growth-immigrant-detention-under-trump#'
      },
    ]

    const podcasts = [
      {
        img: lawfare,
        link: 'https://www.lawfareblog.com/lawfare-podcast-ice-cbp-and-coronavirus-response'
      },
      {
        img: npr,
        link: 'https://www.npr.org/2020/04/07/828962798/immigrants-in-ice-detention-face-the-threat-of-covid-19'
      },
      {
        img: bipart,
        link: 'https://bipartisanpolicy.org/podcast/this-week-in-immigration/'
      },
    ]

    const docs = [
      {
        img: landgraves,
        description: 'The Land of Open Graves, Living and Dying on the Migrant Trail by Jason de Leon',
        link: 'https://www.amazon.com/dp/0520282752?tag=ucpress0a'
      },
      {
        img: min,
        description: 'A 3-Minute Hug by Everardo González',
        link: 'https://www.netflix.com/title/80244679'
      },
      {
        img: documented1,
        description: 'Documented by Jose Antonio Vargas',
        link: 'https://documentedthefilm.com/'
      },
      {
        img: undoc,
        description: 'Living Undocumented by Aaron Saidman',
        link: 'https://documentedthefilm.com/'
      },
      {
        img: reunion,
        description: 'Inside the Cross-Country Journey to Reunite an Undocumented Mother with Her Three Children',
        link: 'https://time.com/5346538/yeni-gonzalez-video-grassroots-border-separation-undocumented-immigrants/'
      },
    ]

    return (
      <div>
        <Header as="h1">
          Resources on the DACA and Abolish ICE
        </Header>
        <Divider />
        <Header as="h2">
          About the Movement
        </Header>
        {this.renderCards(movements)}

        <Header as="h2">
          Research, Academia, and Toolkits
        </Header>
        {this.renderCards(academia)}

        <Header as="h2">
          ICE and Police Departments Working Together
        </Header>
        {this.renderCards(articles)}

        <Header as="h2">
          ICE Detention Camps
        </Header>
        {this.renderCards(camps)}

        <Header as="h2">
          Books and Documentaries
        </Header>
        {this.renderCards(docs)}

        <Header as="h2">
          Podcasts
        </Header>
        {this.renderCards(podcasts)}

        <Header as="h2">
          Videos
        </Header>
        <Header as="h3">
          What's really happening at the US-Mexico border and how we can do better, Erika Pinheiro
        </Header>
        <Embed
          active
          autoplay={false}
          source="youtube"
          id="Depn_GsxSqo"
          aspectRatio="21:9"
        />
        <Header as="h3">
          Newsy: What are undocumented immigrants' legal options?
        </Header>
        <Embed
          active
          autoplay={false}
          source="youtube"
          id="2yur1yZzOJE"
          aspectRatio="21:9"
        />
        <Header as="h3">
          Undocumented Americans: Inside Immigration Debate TIME Magazine
        </Header>
        <Embed
          active
          autoplay={false}
          source="youtube"
          id="aPi3tMmHXIc"
          aspectRatio="21:9"
        />

      </div>
    );
  }
}

export default DACAResources;
