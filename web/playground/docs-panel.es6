import { Panel } from 'panels-ui';
import BoxPosition from '../../box/web/position/container';
import DocsTools from '../../doc/web/tools/component';
import Docs from '../../doc/web/docs/container';
import React from 'react';

export default class BoxesPanel extends React.Component {
  render() {
    return (
      <Panel style={style.panel}>
        <BoxPosition id={this.props.boxId} flux={this.props.flux} style={style.boxPosition} />
        <DocsTools {...this.props} />
        <Docs {...this.props} />
      </Panel>
    );
  }
}

const style = {
  panel: {
    backgroundColor: '#00bd70'
  },
  boxPosition: {
    color: 'white',
    fontSize: 30,
    justifyContent: 'center',
    marginTop: 25
  }
}
