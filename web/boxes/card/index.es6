import { connect } from 'redux/react';
import boxShape from '../shape';
import InnerComponent from './component';
import React, { PropTypes } from 'react';

@connect(({boxes}, {id}) => ({box: boxes[id]}))
export default class BoxCardContainer {
  render() {
    return <InnerComponent box={this.props.box} />;
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    box: boxShape.isRequired
  }
}
