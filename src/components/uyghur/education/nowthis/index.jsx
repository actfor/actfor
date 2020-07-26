import React, { Component } from 'react';

// semantic-ui
import {
  Container,
  Embed,
  Header,
} from 'semantic-ui-react';

class UyghurNowThis extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Header.Subheader>
            China Has Detained More Than a Million Muslims | Op-Ed | NowThis
          </Header.Subheader>
        </Header>
        <Embed
          active
          autoplay={false}
          source="youtube"
          id="zmaqJDlWwrs"
          aspectRatio="21:9"
        />
      </Container>
    );
  }
}

export default UyghurNowThis;