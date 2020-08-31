import React, { Component } from 'react';

// semantic-ui
import {
  Button,
  Segment,
  Header,
  Icon,
  Table,
} from 'semantic-ui-react';

// utils
import reactElementToJSXString from 'react-element-to-jsx-string';

// components
import MailTo from '../../../common/MailTo';
import CopyMessage from '../../../common/CopyMessage';

// messages
import { brandsMess } from '../messages'

export default class BrandsSegment extends Component {
  render() {
    const { name, location } = this.props;
    return (
      <Segment.Group>
        <Segment placeholder>
              <Header icon>
                <Icon name='mail'/>
                Send to 45 different brands
              </Header>
              <MailTo
                email={'anfchallenge@anfcorp.com; diversity@anfcorp.com; cr@acer.com; onlineservice@asus.com; bmwgenius@bmwusa.com; calvinkleincustomerservice@support.calvinklein.com; contactus@carters.com; support@res.cisco.com; consumercare@fila.com; custserv@gap.com; info@hm.com; a.gedda@hm.com; sustainability@hp.com; techregshelp@hp.com; support@huawei.com; jagweb1@jaguarlandrover.com; transportservices@alstrom.com; sales@baicintl.com; mbfs.fraudcontrol@daimler.com; outdoor.discovery@llbean.com; dataprotection@lacoste.com; lradvice@jaguarlandrover.com; angelalee@lenovo.com; Emailcac.info@lge.com; newsbureau@mmsa.com; NIGEL.POWELL@NIKE.COM; pr@nintendo.co.uk; services@nokia.com; Tnf.Ukshop@Vfc.Com; media@oculus.com; pids@ca.panasonic.com; RL-PRESS@RALPHLAUREN.COM; denise.pflock@puma.com; corp.comm@sea.samsung.com; David.Weinberg@skechers.com; SCA.Communications@am.sony.com; tommyhelp@tommy.com; ToshibaPR@accesspr.com;  wecare@uniqlo-usa.com; Paulo.Monteiro@vw.com; contact.ww@zara.com;  care@adidas.com; david.caldwell@gm.com; rtt@we-worldwide.com; tellvictoria@victoriassecret.com; press@google.com'}
                subject={'Regarding your contracts with manufacturers in Xinjiang'}
                body={""}
              >
                <Button primary>Send an email to <br /> the following companies</Button>
              </MailTo>
        </Segment>
        <Segment>
          <CopyMessage
            id="brandMessage"
            header="Copy All Brand Emails to Clipboard"
            message="anfchallenge@anfcorp.com; diversity@anfcorp.com; cr@acer.com; onlineservice@asus.com; bmwgenius@bmwusa.com; calvinkleincustomerservice@support.calvinklein.com; contactus@carters.com; support@res.cisco.com; consumercare@fila.com; custserv@gap.com; info@hm.com; a.gedda@hm.com; sustainability@hp.com; techregshelp@hp.com; support@huawei.com; jagweb1@jaguarlandrover.com; transportservices@alstrom.com; sales@baicintl.com; mbfs.fraudcontrol@daimler.com; outdoor.discovery@llbean.com; dataprotection@lacoste.com; lradvice@jaguarlandrover.com; angelalee@lenovo.com; Emailcac.info@lge.com; newsbureau@mmsa.com; NIGEL.POWELL@NIKE.COM; pr@nintendo.co.uk; services@nokia.com; Tnf.Ukshop@Vfc.Com; media@oculus.com; pids@ca.panasonic.com; RL-PRESS@RALPHLAUREN.COM; denise.pflock@puma.com; corp.comm@sea.samsung.com; David.Weinberg@skechers.com; SCA.Communications@am.sony.com; tommyhelp@tommy.com; ToshibaPR@accesspr.com;  wecare@uniqlo-usa.com; Paulo.Monteiro@vw.com; contact.ww@zara.com;  care@adidas.com; david.caldwell@gm.com; rtt@we-worldwide.com; tellvictoria@victoriassecret.com; press@google.com"
          />
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
              {/* <Table.Row>
                <Table.Cell>Amazon</Table.Cell>
                <Table.Cell>*need email*</Table.Cell>
              </Table.Row> */}
              {/* <Table.Row>
                <Table.Cell>Apple</Table.Cell>
                <Table.Cell>*need email*</Table.Cell>
              </Table.Row> */}
              <Table.Row>
                <Table.Cell>ASUS</Table.Cell>
                <Table.Cell>onlineservice@asus.com</Table.Cell>
              </Table.Row>
              {/* <Table.Row>
                <Table.Cell>BAIC Motor</Table.Cell>
                <Table.Cell>*need email*</Table.Cell>
              </Table.Row> */}
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
              {/* <Table.Row>
                <Table.Cell>Microsoft</Table.Cell>
                <Table.Cell>*need email*</Table.Cell>
              </Table.Row> */}
              {/* <Table.Row>
                <Table.Cell>Mitsubishi</Table.Cell>
                <Table.Cell>*need email*</Table.Cell>
              </Table.Row> */}
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
              {/* <Table.Row>
                <Table.Cell>The North Face</Table.Cell>
                <Table.Cell>*need email*</Table.Cell>
              </Table.Row> */}
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
    )
  }
}
