import { BoxRecord } from '../../records';
import Box from './box';
import Position from '../position/container';
import React from 'react';

export default class BoxCard extends React.Component {
  render() {
    return (
      <div style={style.card}>
        <Box {...this.props} />
        <Position id={this.props.box.id} style={style.position} />
      </div>
    );
  }

  static propTypes = {
    box: React.PropTypes.instanceOf(BoxRecord) //.isRequired
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
    backgroundColor: '#f2f2f2',
    padding: '10px 0 10px 25px'
  }
}
