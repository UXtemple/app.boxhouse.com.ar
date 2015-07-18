import { Panel } from 'panels-ui';
import BoxPosition from '../boxes/position';
import List from './list';
import React, { PropTypes } from 'react';
import Tools from './tools';

export default class Docs {
  render() {
    const { boxId } = this.props;

    return (
      <Panel style={style.panel}>
        <BoxPosition style={style.boxPosition} id={boxId} />
        <Tools boxId={boxId} />
        <List boxId={boxId} />
      </Panel>
    );
  }
}

const style = {
  panel: {
    backgroundColor: '#00bd70',
    paddingBottom: 100
  },
  boxPosition: {
    color: 'white',
    fontSize: 30,
    justifyContent: 'center',
    marginTop: 25
  }
};
