import { Panel } from 'panels-ui';
import View from './view';
import React from 'react';

export default class Doc {
  render() {
    return (
      <Panel style={style.panel}>
        <View {...this.props} />
      </Panel>
    );
  }
}

const style = {
  panel: {
    backgroundColor: 'white'
  }
}
