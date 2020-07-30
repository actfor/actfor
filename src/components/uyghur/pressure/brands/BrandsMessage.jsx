import React, { Component } from 'react';

// semantic-ui
import {
  List,
  Button,
  Segment,
} from 'semantic-ui-react';

// components
import StepMessage from '../../../common/StepMessage';

// messages
import { brandsMess } from './../messages'


class BrandsMessage extends Component {

  render() {
    const steps = [
      {
        type: 'name',
        name: 'Step 1',
      },
      {
        type: 'message',
        name: 'Step 2',
        message: brandsMess,
      },
      {
        type: 'email-all',
        name: 'Step 3',
        email: `anfchallenge@anfcorp.com; diversity@anfcorp.com; cr@acer.com; onlineservice@asus.com;
                bmwgenius@bmwusa.com; calvinkleincustomerservice@support.calvinklein.com; contactus@carters.com; support@res.cisco.com; consumercare@fila.com; custserv@gap.com; info@hm.com; a.gedda@hm.com; sustainability@hp.com; techregshelp@hp.com; support@huawei.com; jagweb1@jaguarlandrover.com; transportservices@alstrom.com; sales@baicintl.com; mbfs.fraudcontrol@daimler.com; outdoor.discovery@llbean.com; dataprotection@lacoste.com; lradvice@jaguarlandrover.com; angelalee@lenovo.com; Emailcac.info@lge.com; newsbureau@mmsa.com; NIGEL.POWELL@NIKE.COM; pr@nintendo.co.uk; services@nokia.com; Tnf.Ukshop@Vfc.Com; media@oculus.com; pids@ca.panasonic.com; RL-PRESS@RALPHLAUREN.COM; denise.pflock@puma.com; corp.comm@sea.samsung.com; David.Weinberg@skechers.com; SCA.Communications@am.sony.com; tommyhelp@tommy.com; ToshibaPR@accesspr.com;  wecare@uniqlo-usa.com; Paulo.Monteiro@vw.com; contact.ww@zara.com;  care@adidas.com; david.caldwell@gm.com; rtt@we-worldwide.com; tellvictoria@victoriassecret.com; press@google.com`,
        subject: 'Regarding your contracts with manufacturers in Xinjiang',
        message: brandsMess,
        subheader: 'Contact these brands at the emails below',
      }
    ]
    return (
      <div>
        <StepMessage
          steps={steps}
        />
      </div>
    );
  }
}

export default BrandsMessage;
