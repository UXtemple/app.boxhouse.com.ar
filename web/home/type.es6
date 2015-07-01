import Boxes from '../boxes/list';
// import BoxesTools from '../box/web/tools/component';
import CompanyProfileCard from '../company/profile/card';
import { Panel } from 'panels-ui';
import React from 'react';

export default class Home {
  render() {
    return (
      <Panel style={style}>
        <CompanyProfileCard />
        <Boxes />
      </Panel>
    );
  }
}

const style = {
  backgroundColor: '#F7E4BF',
  paddingBottom: 100
};
