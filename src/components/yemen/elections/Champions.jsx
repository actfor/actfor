import React, { Component } from 'react';

// semantic-ui
import {
  Accordion,
  Divider,
  Icon,
  List,
  Container,
} from 'semantic-ui-react';

class Champions extends Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;
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
        <p>&nbsp;</p>

          <p>  <Icon style={{ }} name='dropdown' />
            <h2 style={{ display: 'inline' }}>Champions</h2> </p>
            <p>
              <b>Representatives</b>
                <List bulleted>
                  <List.Item>Representative Eliot L. Engel of New York, the chairman of the Foreign Affairs Committee: “I have strong concerns about sending weapons to Saudi Arabia that could be used to kill civilians in Yemen or perpetrate human rights abuses, and I’ve tried to block those sales from going forward,”</List.Item>
                  <List.Item>Representative Ro Khanna, California: <a target='blank' href='https://www.govtrack.us/congress/bills/116/sjres7/summary'>co-sponsored H.J.Res.37</a> that would have ended U.S.’s military involvement in Yemen</List.Item>
                </List>

              <b>Senators</b>
                <List bulleted>
                  <List.Item>Senator Christopher S. Murphy, of Connecticut: “I don’t think we should ever sell arms to a dangerous country because it creates jobs,” Mr. Murphy said, but “this frankly robs the president of one of his primary arguments for why these sales are so necessary...If they’re going to kill civilians, further destabilize the Middle East, and it’s not going to create jobs, then what the hell is the point?”</List.Item>
                  <List.Item>Senator Tim Kaine, Virginia: advocate for congressional prerogative on matters of war and warned of Trump favoritism toward Saudi Arabia</List.Item>
                  <List.Item>Senator Bernie Sanders, Vermont</List.Item>
                </List>
            </p>


      </Container>
    );
  }
}

export default Champions;
