import { connect } from 'redux/react';
import docShape from '../shape';
import InnerComponent from './component';
import React, { PropTypes } from 'react';

// TODO getter
@connect(({docs}, {boxId}) =>
         ({docs: Object.keys(docs).filter(id => docs[id].boxId === boxId).map(id => ({id}))}))
export default class DocsContainer {
  render() {
    return <InnerComponent docs={this.props.docs} />;
  }

  static propTypes = {
    docs: PropTypes.arrayOf(docShape).isRequired
  }
}
