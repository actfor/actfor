import React, { Component } from 'react';

// semantic-ui
import {
  Accordion,
  Header,
  Icon,
} from 'semantic-ui-react';

// components
import Mcatee from './case/Mcatee';
import Mcdade from './case/Mcdade';
import Arbery from './case/Arbery';
import Reed from './case/Reed';
import Blake from './case/Blake';
import Hollowell from './case/Hollowell';
import Taylor from './case/Taylor';
import S3912 from './congress/S3912';
import Breathe from './congress/Breathe';
import HR988 from './congress/HR988';

class PressureCases extends Component {
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
              Case Specific Demands
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
              David McAtee
              <Header.Subheader>
                Urge officials in Kentucky to take action against the officers responsible for the murder of David McAtee
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Mcatee />
          </Accordion.Content>

          {/* S3912 */}
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              Tony McDade
              <Header.Subheader>
                Demand action from Florida officials in regard to the murder of Tony McDade
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <Mcdade />
          </Accordion.Content>

          {/* S3912 */}
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              George Floyd
              <Header.Subheader>
                As of 5/29, three officers identified as Derek Chauvin, Thomas Lane, Tou Thao, and J. Alexander Kueng were arrested. Derek Chauvin has been charged with third-degree murder, and Minnesota attorney general Keith Ellison will lead George Floyd’s case.

              </Header.Subheader>
            </Header>
          </Accordion.Title>



          {/* Breathe */}
          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              Ahmaud Arbery
              <Header.Subheader>
                Demand action from Georgia officials in regard to the murder of Ahmaud Arbery
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <Arbery />
          </Accordion.Content>

          {/* Breathe */}
          <Accordion.Title
            active={activeIndex === 4}
            index={4}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              Sean Reed
              <Header.Subheader>
                Urge Indiana officials to take action against the officers responsible for the murder of Sean Reed
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4}>
            <Reed />
          </Accordion.Content>

          {/* Breathe */}
          <Accordion.Title
            active={activeIndex === 5}
            index={5}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              Jacob Blake
              <Header.Subheader>
                Demand justice for the police brutality against Jacob Blake in Wisconsin
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 5}>
            <Blake />
          </Accordion.Content>

          {/* Breathe */}
          <Accordion.Title
            active={activeIndex === 6}
            index={6}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              Justin Hollowell
              <Header.Subheader>
                Demand justice for the racist assault and critical injury of Justin Hollowell
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 6}>
            <Hollowell />
          </Accordion.Content>


          <Accordion.Title
            active={activeIndex === 7}
            index={7}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h2">
              Breonna Taylor
              <Header.Subheader>
                Demand justice from Kentucky officials for the murder of Breonna Taylor
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 7}>
            <Taylor />
          </Accordion.Content>


        </Accordion>
      </div>
    );
  }
}

export default PressureCases;
