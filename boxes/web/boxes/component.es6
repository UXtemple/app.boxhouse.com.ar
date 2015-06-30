import { BoxRecord } from '../../records';
import BoxCard from '../card/container';
import React, { Component, PropTypes } from 'react';

export default class Boxes extends Component {
  render() {
    let boxes = this.props.boxes.map(box => <BoxCard key={box.id} id={box.id} panels={this.props.panels} />);

    return <div style={{width: '100%'}}>{boxes}</div>;
  }
}

Boxes.propTypes = {
  boxes: PropTypes.arrayOf(BoxRecord) //.isRequired
}
