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
    );
  }
}

export default Elections;
