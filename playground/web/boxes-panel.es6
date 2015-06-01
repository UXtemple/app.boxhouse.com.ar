import { Panel } from 'panels-ui';
import Boxes from '../../box/web/boxes/container';
import BoxesTools from '../../box/web/tools/component';
import CompanyCard from '../../company/web/card/container';
import React from 'react';

export default class BoxesPanel extends React.Component {
  render() {
    return (
      <Panel style={style}>
        <CompanyCard id={1} {...this.props} />
        <BoxesTools companyId={1} {...this.props} />
        <Boxes companyId={1} {...this.props} />
      </Panel>
    );
  }
}

const style = {
  backgroundColor: '#F7E4BF'
}
