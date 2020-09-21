import React, { Component } from 'react';

// semantic-ui
import {
  Accordion,
  Header,
  Icon,
} from 'semantic-ui-react';

// components
import HR1027 from './congress/HR1027';
import S3912 from './congress/S3912';
import Breathe from './congress/Breathe';
import HR988 from './congress/HR988';

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

          {/* HR1027 */}
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              H. Res. 1027
              <Header.Subheader>
                Urge that any legislation passed in the House of Representatives to remedy racial inequities in the United States, especially those present in the criminal justice system, must include reforms to address concerns for Black women.
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <HR1027 />
          </Accordion.Content>

          {/* S3912 */}
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              S. Res. 3912
              <Header.Subheader>
                Support the Justice in Policing Act of 2020
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <S3912 />
          </Accordion.Content>


          {/* Breathe */}
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
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
          <Accordion.Content active={activeIndex === 2}>
            <Breathe />
          </Accordion.Content>


          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              H. Res. 988
              <Header.Subheader>
                Urge congress to condemn all acts of police brutality, racial profiling, and the use of excessive and militarized force throughout the country.
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <HR988 />
          </Accordion.Content>


        </Accordion>
      </div>
    );
  }
}

export default PressureCongress;
