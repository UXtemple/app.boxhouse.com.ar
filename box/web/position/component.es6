import { BoxRecord } from '../../records';
import React from 'react';

export default class BoxPosition extends React.Component {
  render() {
    return (
      <div style={{...style, ...this.props.style}}>
        {this.props.box.position.shelf}
        {this.props.box.position.rack}
        {this.props.box.position.height}
        {this.props.box.position.position}
        {this.props.box.position.depth}
      </div>
    );
  }

  static propTypes = {
    box: React.PropTypes.instanceOf(BoxRecord).isRequired
  }
}

const style = {
  flexDirection: 'row',
  width: '100%'
}
