import { DocRecord } from '../../records';
import React, { Component, PropTypes } from 'react';

export default class DocView extends Component {
  render() {
    return (
      <div>
        <div>{this.props.doc.type}</div>
        <div>{this.props.doc.date.from} - ${this.props.doc.date.to}</div>
        <div>{this.props.doc.number.from} - ${this.props.doc.number.to}</div>
        <div>{this.props.doc.office}</div>
      </div>
    );
  }

  static propTypes = {
    doc: PropTypes.arrayOf(DocRecord) //.isRequired
  }
}
