import React, { Component } from 'react';

import {
  Container,
  List,
} from 'semantic-ui-react';

import ElectionsInfo from './upcoming';

class Elections extends Component {
  render() {
    return (
      <Container style={{ fontSize: '20px'}}>
        <h1>Elect Officials that Hold the U.S. Accountable</h1>

        <p >
          We must build political power by voting out corrupt politicians that prioritize military spending and revenue over the cost of human lives and humanitarian need.
        </p>

        <p>
          We must support politicians that will:
          <List bulleted>
            <List.Item>End U.S. military involvement in Yemen</List.Item>
            <List.Item>Reset U.S.-Saudi relations to hold the kingdom accountable for its numerous human rights transgressions including the murder of U.S. citizen Jamal Khashoggi, ongoing crackdown on activists and opposition, and detention of former Lebanese prime minister Saad Hariri</List.Item>
            <List.Item>Hold the U.S. accountable by requiring congressional authorization for the use of all major military actions in accordance with Article I of the U.S. constitution.</List.Item>
          </List>
        </p>
        <ElectionsInfo />
      </Container>

      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon style={{ }} name='dropdown' />
          <h2 style={{ display: 'inline' }}>National Election</h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            The U.S. is Saudi Arabia’s largest weapons supplier.
            In 2019, the Trump administration declared an emergency
            over Iran, bypassed Congress, and moved forward with an $8
            billion arms sale to Saudi Arabia and other Gulf nations.
            As recently as 5/20, the Trump administration <a target='blank' href='https://www.cnn.com/2020/05/27/opinions/pompeo-saudi-arabia-arms-menendez/index.html'> moved to
            increase weapons sales</a> to Saudi Arabia. (<a target='blank' href='https://www.nytimes.com/2020/05/28/us/politics/congress-saudi-arabia-arms-sales.html'>Edmondson, 2020</a>).
            In 2019, the president vetoed bipartisan legislation that
            would have ended the U.S.’s military involvement in Saudi
            Arabia’s war in Yemen.
          </p>

          <p>
            <a target='blank' href='https://joebiden.com'>Joe Biden</a> <a target='blank' href='https://www.cfr.org/article/presidential-candidates-saudi-arabia'> would end U.S. support for the Saudi-led war</a> in
            yemen and order a reassessment of our relationship with Saudi
            Arabia.
          </p>

        </Accordion.Content>
      </Accordion>
    );
  }
}

export default Elections;
