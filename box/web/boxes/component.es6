import { BoxRecord } from '../../records';
import BoxCard from '../card/container';
import React from 'react';

export default class Boxes extends React.Component {
  render() {
    let boxes = this.props.boxes.map(box => <BoxCard id={box.id} />);

    return <div style={{width: '100%'}}>{boxes}</div>;
  }
}

Boxes.propTypes = {
  boxes: React.PropTypes.arrayOf(BoxRecord).isRequired
}
