import React, { Component } from 'react';

// semantic-ui
import {
  Accordion,
  Header,
  Icon,
} from 'semantic-ui-react';

// components
import S3471 from './congress/S3471';
import HR1025 from './congress/HR1025';
import HR6210 from './congress/HR6210';

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

          {/* S 398 */}
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              S. Res. 3471
              <Header.Subheader>
                Urge your Senators to support the Uyghur Forced Labor Prevention Act
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <S3471 />
          </Accordion.Content>

          {/* HR 910 */}
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              H.R. 6210
              <Header.Subheader>
                Urge your Representatives to support the Uyghur Forced Labor Prevention Act
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <HR6210 />
          </Accordion.Content>

          {/* HJ 56 */}
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              H.R. 1025
              <Header.Subheader>
              To counter the mass arbitrary detention of Turkic Muslims, including Uighurs, within the Xinjiang Uighur Autonomous Region of the People's Republic of China, and for other purposes.
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <HR1025 />
          </Accordion.Content>

        </Accordion>
      </div>
    );
  }
}

export default PressureCongress;
