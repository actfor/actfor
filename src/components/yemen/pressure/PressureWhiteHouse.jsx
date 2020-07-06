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

// components
import CopyMessage from './../../CopyMessage';

// messages
import { whiteHouseMessage } from './messages';

class PressureWhiteHouse extends Component {

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
              <CopyMessage id="whiteHouseMessage" message={whiteHouseMessage(name, location)}/>
              <Divider />
              {whiteHouseMessage(name, location)}
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
                  Contact the White House! Either call, or use the script to copy and paste a message to the White House. 
                </Header.Subheader>
              </Header>
            </Segment>
            <Segment placeholder>
            
            <Grid columns={2} relaxed='very' stackable>
              <Grid.Column>
                <List>
                  <List.Item>
                    <h4>Phone Numbers</h4>
                    <List.List>
                      <List.Item>Comments: 202-456-1111</List.Item>
                      <List.Item>Switchboard: 202-456-1414</List.Item>
                    </List.List>
                  </List.Item>
                  <Divider /> 
                  <List.Item>
                    <h4>TTY/TTD</h4>
                    <List.List>
                      <List.Item>Comments: 202-456-6213</List.Item>
                      <List.Item>Visitor’s Office: 202-456-2121</List.Item>
                    </List.List>
                  </List.Item>
                </List>
              </Grid.Column>

              <Grid.Column textAlign='center' verticalAlign='middle'>
                <Icon color='grey' name='university' size='huge' />
                <br />
                <br />
                <Button
                  primary
                  as='a' target="_blank"
                  href='https://www.whitehouse.gov/contact/'
                  content='Visit White House Site'
                  size='big'
                  icon='external alternate'
                  labelPosition='left'
                >
                </Button>
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

export default PressureWhiteHouse;