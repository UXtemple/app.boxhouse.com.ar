import { connect } from 'redux/react';
import docShape from '../shape';
import InnerComponent from './component';
import React, { PropTypes } from 'react';

@connect(({docs}, {id}) => ({doc: docs[id]}))
export default class DocCardContainer {
  render() {
    return <InnerComponent doc={this.props.doc} />;
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    doc: docShape.isRequired
  }
}
