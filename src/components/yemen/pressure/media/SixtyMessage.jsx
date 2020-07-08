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
import { mediaMess60 } from './../messages'

class SixtyMessage extends Component {
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
              <CopyMessage id="mediaMess60" message={mediaMess60(name, location)}/>
              <Divider />
              {mediaMess60(name, location)}
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
                  Contact 60 Minutes! Either call, or send an email. 
                </Header.Subheader>
              </Header>
            </Segment>
            <Segment placeholder>
              <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                  <List>
                    <List.Item>
                      <h4>Contact NBC</h4>
                      <List.List>
                        <List.Item><b>Phone:</b> (212) 975-3247</List.Item>
                        <List.Item>
                          <b>Address:</b>
                          <List.List>
                            <List.Item>60 Minutes</List.Item>
                            <List.Item>
                              524 West 57th St.
                            </List.Item>
                            <List.Item>
                              New York, NY 10019
                            </List.Item>
                          </List.List>
                        </List.Item>
                      </List.List>
                    </List.Item>
                  </List>
                </Grid.Column>

                <Grid.Column textAlign='center' verticalAlign='middle'>
                  <Header icon>
                    <Icon name='mail' />
                    Send email to 60 Minutes
                  </Header>
                  <MailTo
                    email="60min@cbsnews.com"
                    subject="Your Feature of MBS and Yemen"
                    body={reactElementToJSXString(mediaMess60(name, location))}
                  >
                    <Button primary>Send to 60min@cbsnews.com</Button>
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

export default SixtyMessage;