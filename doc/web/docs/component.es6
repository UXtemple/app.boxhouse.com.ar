import { DocRecord } from '../../records';
import DocCard from '../card/container';
import React from 'react';

export default class Docs extends React.Component {
  render() {
    let docs = this.props.docs.map(doc => <DocCard id={doc.id} />);

    return <div style={{width: '100%'}}>{docs}</div>;
  }
}

Docs.propTypes = {
  docs: React.PropTypes.arrayOf(DocRecord).isRequired
}
