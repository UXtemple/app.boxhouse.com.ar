import { Panel as BoxesPanel } from '../../box/web';
import { Panels } from 'panels-ui';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <Panels>
        <BoxesPanel />
      </Panels>
    );
  }
}
