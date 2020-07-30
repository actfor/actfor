import React, { Component } from 'react';

// semantic-ui
import {
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Input,
  Menu,
  Segment,
  TextArea,
  Button,
  Table,
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
      location: '',
      custom: '',
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
    const { steps } = this.props;
    const { activeItem, name, location, custom } = this.state;

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
                <Divider />
                <Header>
                  <Header.Subheader>
                    Add your own custom message to the script to avoid it getting automatically filtered out. It will be added to the top of the message. (recommended)
                  </Header.Subheader>
                </Header>
                <Form>
                  <TextArea
                    id="custom"
                    placeholder="Example: I am John Smith and I am an undergraduate student. This issue is incredibly important because..."
                    value={custom}
                    onChange={this.handleTextChange}
                  />
                </Form>
              </Segment>
            </Segment.Group>
          </div>
        );
      break;

      case 'message':
        const message = currentStep.message(name, location, custom)

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

      case 'email':
        return (
          <Segment.Group>
            <Segment>
              <Header as='h2'>
                {currentStep.name}
                <Header.Subheader>
                  {currentStep.subheader}
                </Header.Subheader>
              </Header>
            </Segment>

            <Segment placeholder>
              <Grid columns={2} relaxed='very' stackable>

                <Grid.Column>
                  {currentStep.leftSegment}
                </Grid.Column>

                <Grid.Column textAlign='center' verticalAlign='middle'>
                  <Header icon>
                    <Icon name='mail'/>
                    Send to {currentStep.sendTo}
                  </Header>
                  <MailTo
                    email={currentStep.email}
                    subject={currentStep.subject}
                    body={reactElementToJSXString(currentStep.message(name, location))}
                  >
                    <Button primary>Send email to {currentStep.email}</Button>
                  </MailTo>
                </Grid.Column>

              </Grid>
              <Divider vertical>Or</Divider>
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


      case 'email-all':
        return (
          <Segment.Group>
            <Segment>
              <Header as='h2'>
                {currentStep.name}
                <Header.Subheader>
                  {currentStep.subheader}
                </Header.Subheader>
              </Header>
            </Segment>

            <Segment placeholder>
                  <Header icon>
                    <Icon name='mail'/>
                    Send to 45 different brands{currentStep.sendTo}
                  </Header>
                  <MailTo
                    email={currentStep.email}
                    subject={currentStep.subject}
                    body={reactElementToJSXString(currentStep.message(name, location))}
                  >
                    <Button primary>Send an email to <br /> the following companies</Button>
                  </MailTo>
            </Segment>

            <Segment>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Company</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Abercrombie & Fitch</Table.Cell>
                    <Table.Cell>diversity@anfcorp.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Acer</Table.Cell>
                    <Table.Cell>cr@acer.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Alstrom</Table.Cell>
                    <Table.Cell>transportservices@alstrom.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Amazon</Table.Cell>
                    <Table.Cell>*need email*</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Apple</Table.Cell>
                    <Table.Cell>*need email*</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>ASUS</Table.Cell>
                    <Table.Cell>onlineservice@asus.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>BAIC Motor</Table.Cell>
                    <Table.Cell>*need email*</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>BMW</Table.Cell>
                    <Table.Cell>bmwgenius@bmwusa.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Calvin Klein</Table.Cell>
                    <Table.Cell>calvinkleincustomerservice@support.calvinklein.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Carter's</Table.Cell>
                    <Table.Cell>contactus@carters.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Cisco</Table.Cell>
                    <Table.Cell>support@res.cisco.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Fila</Table.Cell>
                    <Table.Cell>consumercare@fila.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Gap</Table.Cell>
                    <Table.Cell>custserv@gap.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>General Motors</Table.Cell>
                    <Table.Cell>david.caldwell@gm.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Google</Table.Cell>
                    <Table.Cell>press@google.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>H&M</Table.Cell>
                    <Table.Cell>a.gedda@hm.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>HP</Table.Cell>
                    <Table.Cell>sustainability@hp.com;</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Huawei</Table.Cell>
                    <Table.Cell>support@huawei.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Jaguar</Table.Cell>
                    <Table.Cell>jagweb1@jaguarlandrover.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>L.L.Bean</Table.Cell>
                    <Table.Cell>outdoor.discovery@llbean.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Lacoste</Table.Cell>
                    <Table.Cell>dataprotection@lacoste.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Land Rover</Table.Cell>
                    <Table.Cell>lradvice@jaguarlandrover.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Lenovo</Table.Cell>
                    <Table.Cell>angelalee@lenovo.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>LG</Table.Cell>
                    <Table.Cell>emailcac.info@lge.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Mercedes-Benz</Table.Cell>
                    <Table.Cell>mbfs.fraudcontrol@daimler.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Microsoft</Table.Cell>
                    <Table.Cell>*need email*</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Mitsubishi</Table.Cell>
                    <Table.Cell>*need email*</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Nike</Table.Cell>
                    <Table.Cell>NIGEL.POWELL@NIKE.COM</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Nintendo</Table.Cell>
                    <Table.Cell>pr@nintendo.co.uk</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Nokia</Table.Cell>
                    <Table.Cell>services@nokia.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>The North Face</Table.Cell>
                    <Table.Cell>*need email*</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Oculus</Table.Cell>
                    <Table.Cell>media@oculus.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Panasonic</Table.Cell>
                    <Table.Cell>pids@ca.panasonic.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Polo Ralph Lauren</Table.Cell>
                    <Table.Cell>RL-PRESS@RALPHLAUREN.COM</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Puma</Table.Cell>
                    <Table.Cell>denise.pflock@puma.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Samsung</Table.Cell>
                    <Table.Cell>corp.comm@sea.samsung.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Skechers</Table.Cell>
                    <Table.Cell>David.Weinberg@skechers.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Sony</Table.Cell>
                    <Table.Cell>SCA.Communications@am.sony.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Tommy Hilfiger</Table.Cell>
                    <Table.Cell>tommyhelp@tommy.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Toshiba</Table.Cell>
                    <Table.Cell>toshibaPR@accesspr.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Uniqlo</Table.Cell>
                    <Table.Cell>wecare@uniqlo-usa.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Victoria’s Secret</Table.Cell>
                    <Table.Cell>tellvictoria@victoriassecret.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Volkswagen</Table.Cell>
                    <Table.Cell>Paulo.Monteiro@vw.com</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Zara</Table.Cell>
                    <Table.Cell>contact.ww@zara.com</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Segment>
          </Segment.Group>
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
