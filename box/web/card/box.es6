import BoxAction from './action';
import BoxTools from './tools';
import React from 'react';

export default class BoxCardBox extends React.Component {
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
        <BoxAction {...this.props} />
        <BoxTools {...this.props} />
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
    background: 'linear-gradient(135deg, #66ed8c, red, #00bd70)'
  }
}
