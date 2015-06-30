import { DocRecord } from '../../records';
import Doc from './doc';
import React, { Component, PropTypes } from 'react';

export default class DocCard extends Component {
  render() {
    return (
      <div style={style}>
        <Doc {...this.props} />
      </div>
    );
  }

  static propTypes = {
    doc: PropTypes.instanceOf(DocRecord) //.isRequired
  }
}

const style = {
  alignItems: 'center',
  marginTop: 25,
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  WebkitUserSelect: 'none',
  userSelect: 'none'
}
