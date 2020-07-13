import React, { Component } from 'react';

// semantic-ui
import {
  Container,
  Divider,
  Header,
} from 'semantic-ui-react';

// components
import MailTo from './../components/MailTo';
import NavBar from './../components/navbar';

class Contact extends Component {
  render() {
      return (
        <div>
          <NavBar />
          <Container>
            <Header as="h1">Contact Us</Header>
            <Divider />
            <p>
              Email us at <tab />
              <MailTo
                email="info@actfor.us"
                subject=""
                body=""
              >
                info@actfor.us
              </MailTo>
            </p>
          </Container>
        </div>
      );
  }
}

export default Contact;