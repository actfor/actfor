import React, { Component } from 'react';

// semantic-ui
import {
  Container,
  Divider,
  Header,
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
            <NavBar />  
            <Container>
              <Header as="h1">
                Our Purpose
              </Header>
              <Divider />
              <div style={{ fontSize: '16px' }}>
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
            </Container>
          </div>
      );
    }
}

export default About;