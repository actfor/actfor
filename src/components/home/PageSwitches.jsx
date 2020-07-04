import React, { Component } from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

class PageSwitches extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/yemen">
            Yemen
          </Route>
          <Route path="/blm">
            BLM
          </Route>
        </Switch>
      </div>
    );
  }
}

export default PageSwitches;