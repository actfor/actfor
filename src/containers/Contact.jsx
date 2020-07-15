import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
} from 'semantic-ui-react';

// components
import NavBar from './../components/navbar';

class Contact extends Component {
  render() {
      return (
        <div>
          <NavBar />
          <Container>
            <Header as="h1">
              Contact Us
              <Header.Subheader>Visit and follow our socials, or email us at info@actfor.us</Header.Subheader>
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
        </div>
      );
  }
}

export default Contact;