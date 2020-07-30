import React, { Component } from 'react';

// semantic-ui
import {
  Accordion,
  Header,
  Icon,
  Image,
} from 'semantic-ui-react';

// components
import BrandsMessage from './brands/BrandsMessage';


class PressureBrands extends Component {

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
      </div>
    );
  }
}

export default PressureBrands;
