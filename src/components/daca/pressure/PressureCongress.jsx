import React, { Component } from 'react';

// semantic-ui
import {
  Accordion,
  Header,
  Icon,
} from 'semantic-ui-react';

// components
import Breathe from './congress/Breathe';
import S1440 from './congress/S1440';
import S3609 from './congress/S3609';

class PressureCongress extends Component {
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
      <div>
        <Accordion fluid styled>

          <Accordion.Title>
            <Header as="h1">
              Active Bills in Congress
            </Header>
          </Accordion.Title>

          {/* Breathe */}
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              The BREATHE Act
              <Header.Subheader>
              Urge congress to divest our taxpayer dollars from brutal and discriminatory policing.
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Breathe />
          </Accordion.Content>

          {/* S1440 */}
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              S. Res. 1440
              <Header.Subheader>
                PROTECT Immigration Act
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <S1440 />
          </Accordion.Content>


          {/* S3609 */}
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
            S. Res. 3609
              <Header.Subheader>
                Coronavirus Immigrant Families Protection Act
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <S3609 />
          </Accordion.Content>
        </Accordion>
      </div>
    );
  }
}

export default PressureCongress;
