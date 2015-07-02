import CompanyProfileCard from '../company/profile/card';
import List from './list';
import Tools from './tools';
import { Panel } from 'panels-ui';
import React from 'react';

export default class Boxes {
  render() {
    return (
      <Panel style={style}>
        <CompanyProfileCard />
        <Tools />
        <List />
      </Panel>
    );
  }
}

const style = {
  backgroundColor: '#F7E4BF',
  paddingBottom: 100
};
