import Action from './action';
import Tools from './tools';
import React from 'react';

export default class Box {
  render() {
    let boxStyle = style.box;
    if (this.props.box.full) {
      boxStyle = {
        ...boxStyle,
        ...style.boxFull
      };
    }

    return (
      <div style={boxStyle}>
        <Action {...this.props} />
        <Tools {...this.props} />
      </div>
    );
  }
}

const style = {
  box: {
    background: 'linear-gradient(135deg, #66ed8c, #00bd70, #00bd70)',
    borderRadius: 5,
    color: 'white',
    width: '65%'
  },
  boxFull: {
    background: 'linear-gradient(135deg, #FFC094, #E99F6C, #E99F6C)'
  }
}
