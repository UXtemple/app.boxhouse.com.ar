import { DocRecord } from '../../records';
import DocCard from '../card/container';
import React, { Component, PropTypes } from 'react';

export default class Docs extends Component {
  render() {
    let docs = this.props.docs.map(doc => <DocCard key={doc.id} id={doc.id} panels={this.props.panels} />);

    return <div style={{width: '100%'}}>{docs}</div>;
  }

  static propTypes = {
    docs: PropTypes.arrayOf(DocRecord) //.isRequired
  }
}
