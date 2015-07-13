import { connect } from 'redux/react';
import { getters as docsGetters } from '../../../docs';
import boxShape from '../shape';
import InnerComponent from './component';
import React, { PropTypes } from 'react';

@connect(({boxes, docs}, {id}) => ({box: boxes[id], documentCount: docsGetters.count(docs, {boxId: id})}))
export default class BoxCardContainer {
  render() {
    return <InnerComponent {...this.props} />;
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    box: boxShape.isRequired,
    documentCount: PropTypes.number.isRequired
  }
}
