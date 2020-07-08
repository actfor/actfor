import React, { Component } from 'react';

// semantic-ui
import {
  Accordion,
  Header,
  Icon,
  Image,
} from 'semantic-ui-react';

// components
import S398Message from './congress/S398Message';

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
              S. 398
              <Header.Subheader>
                Saudi Arabia Accountability and Yemen Act of 2019
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <S398Message />
          </Accordion.Content>

          {/* HR 910 */}
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              H.R. 910
              <Header.Subheader>
                Yemen Refueling Prohibition Act
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            Content Here
          </Accordion.Content>

          {/* HJ 56 */}
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              H.J. Res. 56
              <Header.Subheader>
                Directing the President to terminate the use of the United States Armed Forces with respect to the military intervention led by Saudi Arabia in the Republic of Yemen
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            Content Here
          </Accordion.Content>

        </Accordion>
      </div>
    );
  }
}

export default PressureCongress;