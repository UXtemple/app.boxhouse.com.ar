import { DocRecord } from '../../records';
import Field from '../field';
import React, { Component, PropTypes } from 'react';

export default class DocFields extends Component {
  render() {
    const { disabled, doc } = this.props;
    const fields = [{
      disabled,
      label: 'Type',
      value: doc.type
    }, {
      disabled,
      label: 'Number from',
      value: doc.number.from
    }, {
      disabled,
      label: 'Number to',
      value: doc.number.to
    }, {
      disabled,
      label: 'Date from',
      value: doc.date.from
    }, {
      disabled,
      label: 'Date to',
      value: doc.date.to
    }].map((field, i) => <Field key={i} {...field} style={i !== 0 ? {marginTop: 20} : {}}/>);

    return <div style={{margin: 50}}>{fields}</div>;
  }

  static propTypes = {
    doc: PropTypes.arrayOf(DocRecord) //.isRequired
  }
}
