import BoxPosition from '../boxes/position';
import List from './list';
// import Tools from './tools';
import { Panel } from 'panels-ui';
import React from 'react';

export default class Docs {
  render() {
    return (
      <Panel style={style.panel}>
        <BoxPosition style={style.boxPosition} id={this.props.id} />
        <List boxId={this.props.id} />
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
