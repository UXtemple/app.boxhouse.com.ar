import * as DUMMY_DATA from './dummy-data';
import { createPanelsRuntime } from 'panels-runtime';
import React from 'react';

const instance = createPanelsRuntime(DUMMY_DATA);

React.render(<instance.App />, document.getElementById('playground-container'));

window.Playground = {
  boxhouse: {
    contexts: {
      dashboard() { return instance.getState().contexts['dashboard.boxhouse.com.dev:3000'] },
      uxtemple() { return instance.getState().contexts['uxtemple.boxhouse.com.dev:3000'] }
    }
  },
  instance
};

console.log('Welcome to boxhouse playground.');
console.log('https://boxhouse.uxtemple.com');
console.log('Playground module', Playground);
