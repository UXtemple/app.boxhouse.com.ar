import { Panel } from 'panels-ui';
import { TitleBlock } from 'panels-blocks';
import Companies from '../companies/list';
import React from 'react';
import Tools from './tools';

export default class Dashboard {
  render() {
    return (
      <Panel style={style.panel}>
        <TitleBlock>Dashboard</TitleBlock>
        <Tools />
        <Companies />
      </Panel>
    );
  }
}

const style = {
  panel: {
    backgroundColor: '#323232',
    paddingBottom: 100,
    maxWidth: 360,
    width: '100vw'
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 30,
    margin: '25px 0px 0px'
  }
};
