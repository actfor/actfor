import React, { Component } from 'react';

// semantic-ui
import {
  Icon,
  Popup,
} from 'semantic-ui-react';

class CopyMessage extends Component {
  handleCopyCitation = () => {
    const { id } = this.props;
    let copyArea = document.getElementById(id);
    copyArea.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
  }
  render() {
    const { id, message } = this.props;
    const style = {
      position: 'fixed',
      left: '-10000px',
      top: '-10000px'
    }
    return (
      <div style={{ color: '#88060d' }}>
        <Popup
          on="click"
          content="Copied Successfully!"
          trigger={
            <Icon
              size="big"
              name="copy outline"
              onClick={this.handleCopyCitation}
            />
          }
        />
        <h4 style={{ display: 'inline' }}>Copy Message to Clipboard</h4>
        <div
          id={id}
          style={style}
          contentEditable
        >
          {message}
        </div>
      </div>
    );
  }
}

export default CopyMessage;