import React, { Component } from 'react';

// semantic-ui
import {
  Accordion,
  Header,
  Icon,
} from 'semantic-ui-react';

// components
import S243Message from './congress/S243Message';
import HR910Message from './congress/HR910Message';
import HJ56Message from './congress/HJ56Message';

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
              S. Res. 243
              <Header.Subheader>
                A resolution requesting information on Saudi Arabia’s human rights practices in Yemen pursuant to section 502B(c) of the Foreign Assistance Act of 1961
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <S243Message />
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
            <HR910Message />
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
            <HJ56Message />
          </Accordion.Content>

        </Accordion>
      </div>
    );
  }
}

export default PressureCongress;