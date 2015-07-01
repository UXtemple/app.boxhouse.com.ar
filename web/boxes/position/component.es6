import boxShape from '../shape';
import React, { PropTypes } from 'react';

export default class BoxPosition {
  render() {
    const { depth, height, position, rack, shelf } = this.props.box.position;

    return (
      <div style={{...style.wrapper, ...this.props.style}}>
        <div style={style.prop}>S {shelf}</div>
        <div style={style.prop}>R {rack}</div>
        <div style={style.prop}>H {height}</div>
        <div style={style.prop}>P {position}</div>
        <div style={style.prop}>D {depth}</div>
      </div>
    );
  }

  static propTypes = {
    box: boxShape.isRequired
  }
}

const style = {
  wrapper: {
    flexDirection: 'row',
    width: '100%'
  },
  prop: {
    flexDirection: 'row',
    marginRight: 5
  }
}
