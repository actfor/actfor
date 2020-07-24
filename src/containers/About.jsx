import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Popup,
} from 'semantic-ui-react';

// components
import NavBar from './../components/navbar';

class About extends Component {
    render() {
      const bipoc = (
        <Popup
          content="BIPoC stands for Black and Indigenous and People of Color, while highlighting that the oppression of Black and Indigenous peoples are at the forefront of social justice activism."
          header="What is BIPoC?"
          trigger={
          <div style={{ display: 'inline', color: '#ee9b2e' }}>
            BIPoC
          </div>}
        />
      );

      return (
          <div>
            <NavBar unscrollable />  
            <Container>
              <Header as="h1">
                Our Purpose
              </Header>
              <Divider />
              <div style={{ fontSize: '20px' }}>
                <p>
                  The purpose of this website is to highlight the voices of activists on issues we care about and to encourage the everyday citizen to take action. We noticed that many people speak passionately about a variety of issues on social media, and we wanted to help everyone take the next step by translating education into action. In regards to these issues, our website is an easy and accessible way to consolidate information, contact officials, donate, and keep track of upcoming elections.
                </p>
                <p>
                  
                  {bipoc} communities have historically led and continue to lead the development of social organizing theory, methods, and practices. Social activism is an instrument for social change and involves doing, acting, mobilizing the resources, and supporting leadership to bring political or social change. It looks to identify the root causes of community needs and to develop solutions to address them. Social activism also encompasses allyship, which is the lifelong process of building relationships with and supporting marginalized individuals and communities.
                </p>
                <p>
                  This website exists to uplift the voices of BIPoC activists who are onsite and have been spearheading these initiatives for years. While the creators of this website are limited to issues and voices that we have access to, we turn our attention to the people leading grassroots organizations, the journalists who have lost their lives for true reporting, and to BIPoC politicians working to protect human rights for their own communities and other BIPoC individuals. 
                </p>
              </div>

              <br />
              <br />

              <Header as="h1">
                Contact Us
                <Header.Subheader>Would you like to contribute or ask any questions? Visit and follow our socials, or email us at info@actfor.us!</Header.Subheader>
              </Header>
              <Divider />
              <Button.Group vertical labeled icon size="big">
                <Button
                  primary
                  icon
                  labelPosition='left'
                  as='a'
                  href='mailto:info@actfor.us'
                  target="_blank"
                >
                  <Icon name="mail" />
                  Email info@actfor.us
                </Button>
                <Button
                  color='instagram'
                  as='a'
                  target="_blank"
                  href='https://www.instagram.com/actfor.us/'
                >
                  <Icon name='instagram' />
                  Instagram
                </Button>
                <Button
                  color='twitter'
                  as='a'
                  target="_blank"
                  href='https://twitter.com/actfor_us'
                >
                  <Icon name='twitter' />
                  Twitter
                </Button>
              </Button.Group>
            </Container>
            <br />
          </div>
      );
    }
}

export default About;