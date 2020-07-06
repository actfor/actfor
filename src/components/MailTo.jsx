import React, { Component } from 'react';

class MailTo extends Component {
  render() {
    const { email, subject, body } = this.props;
    return (
      <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{this.props.children}</a>
    );
  }
}

export default MailTo;