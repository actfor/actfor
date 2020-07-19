import React, { Component } from 'react';

// semantic-ui
import {
  Accordion,
  Divider,
  Icon,
  List,
  Container,
  Dropdown,
} from 'semantic-ui-react';

class Congress extends Component {

  onChange = (e, { value }) => {
    this.props.history.push(`/${value}`)
  }

  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  handleScroll = e => {
    e.preventDefault();
    const main = this.main.current;
    window.scrollTo({
      top: main.offsetTop,
      left: 0,
      behavior: "instant"
    });
  };

  render() {
    const options = [
      {
        key: 'Arizona',
        value: '/arizona',
        text: 'Arizona'
      }
    ]

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

        <p>
            <Icon style={{ }} name='dropdown' />
            <h2 style={{ display: 'inline' }}>Congressional Elections</h2></p>

          <div>
            <Dropdown
              fluid
              selection
              search
              placeholder='Search for your state to learn more about its Representatives'
              onChange={this.onChange}
              options={options}
            />
          </div>

          <p>&nbsp;</p>

          <p id = 'arizona'>
            <b>Arizona</b>
            <p style={{color:'blue'}}>AZ-01 O'Halleran voted for the bill. In a somewhat competitive election.</p>
            <p style={{color:'red'}}>AZ-06 Schweikert voted for the bill. In a somewhat competitive election.</p>
            <p><b>***NOTE:</b> Schweikert recieved a 0% rating from the League of Conservation. He is also anti-abortion, denies climate change, and has an 'A' rating from the NRA</p>
          </p>
      </Container>

    );
  }
}

export default Congress;
