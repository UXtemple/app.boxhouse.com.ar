// import Boxes from '../box/web/boxes/container';
// import BoxesTools from '../box/web/tools/component';
import CompanyProfileCard from '../company/web/profile-card/container';
import { Panel } from 'panels-ui';
import React, { Component, PropTypes } from 'react';

export default class Home extends Component {
  render() {
    return (
      <Panel style={style.panel}>
        <CompanyProfileCard />
      </Panel>
    );
  }
}

const style = {
  panel: {
    backgroundColor: '#F7E4BF',
    paddingBottom: 100
  }
}
        // <BoxesTools />
        // <Boxes />
