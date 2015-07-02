import { connect } from 'redux/react';
import docShape from '../../docs/shape';
import InnerComponent from './component';
import React, { PropTypes } from 'react';

// TODO getter
@connect(({docs}, {id}) => ({doc: docs[id]}))
export default class DocContainer {
  render() {
    return <InnerComponent doc={this.props.doc} />;
  }

  static propTypes = {
    doc: PropTypes.arrayOf(docShape).isRequired
  }
}
