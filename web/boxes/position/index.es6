import { connect } from 'redux/react';
import boxShape from '../shape';
import InnerComponent from './component';
import React, { PropTypes } from 'react';

@connect(({boxes}, {id}) => ({box: boxes[id]}))
export default class BoxPositionContainer {
  render() {
    return <InnerComponent box={this.props.box} style={this.props.style} />;
  }

  static defaultProps = {
    style: {}
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    box: boxShape.isRequired,
    style: PropTypes.object
  }
}
