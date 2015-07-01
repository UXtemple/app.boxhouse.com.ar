import { connect } from 'redux/react';
import boxShape from '../shape';
import InnerComponent from './component';
import React, { PropTypes } from 'react';

// TODO getter
@connect(({boxes}) => ({boxes: Object.keys(boxes).map(id => ({id}))}))
export default class BoxesContainer {
  render() {
    return <InnerComponent boxes={this.props.boxes} />;
  }

  static propTypes = {
    boxes: PropTypes.arrayOf(boxShape).isRequired
  }
}
