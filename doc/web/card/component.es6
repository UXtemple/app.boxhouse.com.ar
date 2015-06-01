import { DocRecord } from '../../records';
import Doc from './doc';
import React from 'react';

export default class DocCard extends React.Component {
  render() {
    return (
      <div style={style}>
        <Doc {...this.props} />
      </div>
    );
  }
}

DocCard.propTypes = {
  doc: React.PropTypes.instanceOf(DocRecord).isRequired
}

const style = {
  alignItems: 'center',
  marginTop: 25,
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  WebkitUserSelect: 'none',
  userSelect: 'none'
}
