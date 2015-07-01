import Box from './box';
import boxShape from '../shape';
import Position from '../position';
import React from 'react';

export default class BoxCard {
  render() {
    return (
      <div style={style.card}>
        <Box {...this.props} />
        <Position id={this.props.box.id} style={style.position} />
      </div>
    );
  }

  static propTypes = {
    box: boxShape.isRequired
  }
}

const style = {
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
    padding: '10px 0 10px 25px'
  }
}
