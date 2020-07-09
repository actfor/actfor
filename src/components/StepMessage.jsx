import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  List,
  Menu,
  Segment
} from 'semantic-ui-react';

import reactElementToJSXString from 'react-element-to-jsx-string';

// components
import CopyMessage from './CopyMessage';
import MailTo from './MailTo';

class StepMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      repName: '',
      location: '',
      activeItem: props.steps[0].name,
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleTextChange = (e, {id , value}) => {
    this.setState({
      [id]: value,
    })
  }

  renderSegment = () => {
    const { steps, congress } = this.props;
    const { activeItem, name, location, repName } = this.state;

    const currentStep = steps.filter(step => step.name == activeItem)[0] || {}

    switch (currentStep.type) {
      case 'name': 
        return (
          <div>
            <Segment.Group>
              <Segment>
                <Header as='h2'>
                  {currentStep.name}
                  <Header.Subheader>
                    Add a name and your local information for your generated message (optional)
                  </Header.Subheader>
                </Header>
              </Segment>
              <Segment>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={this.handleTextChange}
                />
                <br />
                <br />
                <Input
                  id="location"
                  placeholder="State, Zipcode"
                  value={location}
                  onChange={this.handleTextChange}
                />
                {congress &&
                  <div>
                    <br />
                    <Input
                    id="repName"
                    placeholder="Name of Congress Rep"
                    value={repName}
                    onChange={this.handleTextChange}
                  />
                  </div>
                }
              </Segment>
            </Segment.Group>
          </div>
        );
      break;

      case 'message':
        const message = congress ? currentStep.message(repName, name, location) : currentStep.message(name, location)

        return (
          <Segment.Group>
            <Segment>
              <Header as='h2'>
                {currentStep.name}
                <Header.Subheader>
                  Read our generated script for your message, and then copy it by clicking the button! 
                </Header.Subheader>
              </Header>
            </Segment>
            <Segment>
              <CopyMessage id="mediaMess60" message={message}/>
              <Divider />
              {message}
            </Segment>
          </Segment.Group>
        );
      break;

      case 'other':
        return (
          <div>
            <Segment.Group>
              <Segment>
                <Header as='h2'>
                  {currentStep.name}
                  <Header.Subheader>
                    {currentStep.subheader}
                  </Header.Subheader>
                </Header>
              </Segment>

              {currentStep.segment}
            </Segment.Group>
          </div>
        );
      break;

      default:
        break;
    }
  }

  render() {
    const { steps } = this.props;
    const { activeItem } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>

              { steps.map(step => (
                <Menu.Item
                  name={step.name}
                  active={activeItem === step.name}
                  onClick={this.handleItemClick}
                />
              ))}

            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            {this.renderSegment()}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default StepMessage;