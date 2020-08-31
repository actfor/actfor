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
    const { id, message, header } = this.props;
    const style = {
      position: 'fixed',
      left: '-10000px',
      top: '-10000px'
    }
    return (
      <div>
        <Popup
          on="click"
          content="Copied Successfully!"
          trigger={
            <Icon
              size="big"
              name="copy outline"
              color="primary"
              onClick={this.handleCopyCitation}
            />
          }
        />
        <h4 style={{ display: 'inline', color: '#88060d' }}>{header || "Copy Message to Clipboard"}</h4>
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