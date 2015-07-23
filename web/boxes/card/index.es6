import Action from './action';
import boxShape from '../shape';
import Position from '../position';
import React, { PropTypes } from 'react';
import Tools from './tools';

export default class BoxCard {
  render() {
    const { addDoc, box, removeBox, toggleBoxFull } = this.props;
    const boxStyle = box.full ? {...style.box, ...style.boxFull} : style.box;

    return (
      <div style={style.card}>
        <div style={boxStyle}>
          <Action box={box} />
          <div style={{backgroundColor: 'rgba(255,255,255,0.3)', height: 1, margin: '0 20px'}} />
          <Tools addDoc={addDoc} box={box} removeBox={removeBox} toggleBoxFull={toggleBoxFull} />
        </div>
        <Position box={box} style={style.position} />
      </div>
    );
  }

  static propTypes = {
    addDoc: PropTypes.func.isRequired,
    box: boxShape.isRequired,
    removeBox: PropTypes.func.isRequired,
    toggleBoxFull: PropTypes.func.isRequired
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
  },
  card: {
    alignItems: 'center',
    background: 'linear-gradient(to bottom, #F7E4BF, #C7B699)',
    marginTop: 25,
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    WebkitUserSelect: 'none',
    userSelect: 'none'
  },
  position: {
    backgroundColor: 'white',
    fontSize: 14,
    padding: '5px 0 5px 25px'
  }
}
