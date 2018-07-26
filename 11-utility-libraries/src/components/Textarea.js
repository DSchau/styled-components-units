import React, { Component } from 'react';
import autosize from 'autosize';

export default class Textarea extends Component {
  componentDidMount() {
    autosize(this.textarea);
  }

  componentWillUnmount() {
    autosize.destroy(this.textarea);
  }

  render() {
    return (
      <textarea ref={node => (this.textarea = node)} {...this.props}>
        {this.props.children}
      </textarea>
    );
  }
}
