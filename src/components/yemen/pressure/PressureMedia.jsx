import React, { Component } from 'react';

// semantic-ui
import {
  Accordion,
  Header,
  Icon,
  Image,
} from 'semantic-ui-react';

// components
import TimeMessage from './media/TimeMessage';
import SixtyMessage from './media/SixtyMessage';

// images
import * as time from './../../../images/time.png';
import * as sixty from './../../../images/60minutes.jpg';

class PressureMedia extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
    }
  }

  handleClick = (e, { index }) => {
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
 
    this.setState({ activeIndex: newIndex })
   }

  render() {
    const { activeIndex } = this.state;

    return (
      <div >
        <Accordion fluid styled>

          <Accordion.Title>
            <Header as="h1">
              Portrayal of Muhammad Bin Salman
            </Header>
          </Accordion.Title>

          {/* Time Magazine */}
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h3">
              <Image src={time} size="medium" />
              Time Magazine
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <TimeMessage />
          </Accordion.Content>

          {/* 60 Minutes */}
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h3">
              <Image src={sixty} size="medium" />
              60 Minutes
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <SixtyMessage />
          </Accordion.Content>
        </Accordion>
      </div>
    );
  }
}

export default PressureMedia;