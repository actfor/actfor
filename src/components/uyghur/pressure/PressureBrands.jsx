import React, { Component } from 'react';

// components
import StepMessage from '../../common/StepMessage';
import BrandsSegment from './brands/BrandsSegment';

// messages
import { brandsMess } from './messages'

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
        type: 'other',
        name: 'Step 3',
        subheader: 'Email all of the brands',
        component: BrandsSegment
      }
    ]
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div >
        <Accordion fluid styled>

          <Accordion.Title>
            <Header as="h1">
              Pressure American brands to stop using forced Uyghur labor
              <Header.Subheader>
                Urge brands to terminate all contracts with Xinjiang manufacturers benefitting from the forced labor of Uyghurs
              </Header.Subheader>
            </Header>
          </Accordion.Title>
          {/* Pressure Brands */}
          <BrandsMessage />
        </Accordion>
=======
=======
>>>>>>> 34236d0c6655bfbb7cbc892dba875dba80c294f1
      <div>
        <StepMessage
          steps={steps}
        />
<<<<<<< HEAD
>>>>>>> 6cad6c89193014041117e4faf9d008889fdef009
=======
>>>>>>> 34236d0c6655bfbb7cbc892dba875dba80c294f1
      </div>
    );
  }
}

export default BrandsMessage;
