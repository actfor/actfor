import React from 'react';

import {
  Button,
  Segment,
} from 'semantic-ui-react';

const renderStep3Segment = () => (
  <Segment>
    <iframe
      height="500px"
      width="100%"
      src="https://www.contactingcongress.org/"
    />
    <br />
    <br />
    <Button
      primary
      as='a' target="_blank"
      href='https://www.contactingcongress.org/'
      content='Visit Contacting Congress'
      size='big'
      icon='external alternate'
      labelPosition='left'
    />
  </Segment>
)

const renderGovTrackSegment = (url) => (
  <Segment>
    <iframe
      height="400px"
      width="100%"
      src={url}
    />
    <br />
    <br />
    <Button
      primary
      as='a' target="_blank"
      href={url}
      content='Visit GovTrack'
      size='big'
      icon='external alternate'
      labelPosition='left'
    />
  </Segment>
)

const renderOtherSegment = (url) => (
  <Segment>
    <iframe
      height="400px"
      width="100%"
      src={url}
    />
    <br />
    <br />
    <Button
      primary
      as='a' target="_blank"
      href={url}
      content='Visit Site'
      size='big'
      icon='external alternate'
      labelPosition='left'
    />
  </Segment>
)

export {
  renderGovTrackSegment,
  renderStep3Segment,
  renderOtherSegment,
};
