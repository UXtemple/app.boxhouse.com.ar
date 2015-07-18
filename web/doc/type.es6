import { connect } from 'redux/react';
import { Panel } from 'panels-ui';
import docShape from '../docs/shape';
import React, { PropTypes } from 'react';
import View from './view';

@connect((state, {docId}) => ({
  doc: state.docs[docId]
}))
export default class Doc {
  render() {
    const { doc } = this.props;

    return (
      <Panel style={style.panel}>
        <View doc={doc} />
      </Panel>
    );
  }

  static propTypes = {
    doc: docShape.isRequired,
    docId: PropTypes.string.isRequired
  }
}

const style = {
  panel: {
    backgroundColor: 'white'
  }
}
