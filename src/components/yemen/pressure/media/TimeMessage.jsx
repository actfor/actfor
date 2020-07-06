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
import CopyMessage from './../../../CopyMessage';
import MailTo from './../../../MailTo';

// messages
import { mediaMessTime } from './../messages'

class TimeMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      activeItem: 'step 1',
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleTextChange = (e, {id , value}) => {
    this.setState({
      [id]: value,
    })
  }

  renderSegment = () => {
    const { name, location, activeItem } = this.state;
    switch (activeItem) {
      case 'step 1':
        return (
          <div>
            <Segment.Group>
              <Segment>
                <Header as='h2'>
                  Step 1
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
              </Segment>
            </Segment.Group>
          </div>
        )
        break;
      
      case 'step 2':
        return (
          <Segment.Group>
            <Segment>
              <Header as='h2'>
                Step 2
                <Header.Subheader>
                  Read our generated script for your message, and then copy it by clicking the button! 
                </Header.Subheader>
              </Header>
            </Segment>
            <Segment>
              <CopyMessage id="mediaMessTime" message={mediaMessTime(name, location)}/>
              <Divider />
              {mediaMessTime(name, location)}
            </Segment>
          </Segment.Group>
        )
        break;

      case 'step 3':
        return (
          <Segment.Group>
            <Segment>
              <Header as='h2'>
                Step 3
                <Header.Subheader>
                  Contact Time Magazine! Either call, or send an email. 
                </Header.Subheader>
              </Header>
            </Segment>
            <Segment placeholder>
              <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                  <List>
                    <List.Item>
                      <h4>Contact Customer Service</h4>
                      <List.List>
                        <List.Item><b>Tel dialing from the UK:</b> 0345 045 0360</List.Item>
                        <List.Item><b>From all other countries:</b> +44 (0) 1858 438830</List.Item>
                      </List.List>
                    </List.Item>
                  </List>
                </Grid.Column>

                <Grid.Column textAlign='center' verticalAlign='middle'>
                  <Header icon>
                    <Icon name='mail' />
                    Send email to Time Magazine
                  </Header>
                  <MailTo
                    email="time@subscription.co.uk"
                    subject="Your Feature of MBS and Yemen"
                    body={reactElementToJSXString(mediaMessTime(name, location))}
                  >
                    <Button primary>Send to time@subscription.co.uk</Button>
                  </MailTo>
                </Grid.Column>
              </Grid>
              <Divider vertical>Or</Divider>
            </Segment>
          </Segment.Group>
        )
      break;
    
      default:
        break;
    }
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='step 1'
              active={activeItem === 'step 1'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='step 2'
              active={activeItem === 'step 2'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='step 3'
              active={activeItem === 'step 3'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          {this.renderSegment()}
        </Grid.Column>
      </Grid>
    );
  }
}

export default TimeMessage;