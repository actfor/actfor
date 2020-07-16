import React, { Component } from 'react';

import {
  Container,
} from 'semantic-ui-react';

import AccordionArticle from './AccordionArticle';

class CrisisArticle extends Component {
  render() {
    return (
      <Container style={{ fontSize: '20px'}}>
        <h1>US-Backed Saudi Coalition is Responsible for the World’s Worst Crisis</h1>

        <p >
        The man-made crisis in Yemen is the world’s worst catastrophe. Over <b>24 million people</b> in Yemen desperately need aid, of which <b>12.2 million</b> are children. <b>3.2 million people</b> have “acute malnutrition,” including <b>two million children</b> under five and <b>one million pregnant and lactating women</b>. <b>17.8 million</b> people lack water and sanitation, resulting in the world's fastest cholera epidemic. <b>14.8 million</b> people lack access to healthcare. <b>10 million</b> people are expected to starve by the end of the year. 
        </p>

        <p>
          The crisis in Yemen did not just happen; it has been <i>directly and primarily</i> caused by air strikes and a naval blockade from Saudi Arabia, the United States, the United Kingdom, France and eight other Sunni nations in a Saudi-formed coalition. This piece will discuss the origins of the crisis, the destructive involvement of the U.S.-backed Saudi Arabia coalition, and the tragic effects of the Yemeni Civil War on an already vulnerable population. Lastly, the piece will outline what you can do-- through political action, public pressure, and humanitarian aid-- to help alleviate the dire effects of the world’s worst crisis.
        </p>
        <AccordionArticle />
      </Container>
    );
  }
}

export default CrisisArticle;