// import BOX_DUMMY_DATA from '../../box/dummy-data';
import DOC_DUMMY_DATA from '../../doc/dummy-data';
import * as Flummox from 'flummox';
import FluxComponent from 'flummox/component';
import * as Boxhouse from '../../index';
import { Container as AppContainer } from '../../app/web';
import React from 'react';

let Playground = {
  Flummox,
  FluxComponent,
  Boxhouse,
  React
};
window.Playground = Playground;

console.log('Welcome to boxhouse playground.');
console.log('https://boxhouse.uxtemple.com');
console.log('Playground module', Playground);

const flux = new Boxhouse.App.Flux();

// flux.getActions('box').loadBoxes(BOX_DUMMY_DATA);
flux.getActions('doc').loadDocs(DOC_DUMMY_DATA);

React.render(
  <FluxComponent flux={flux}>
    <AppContainer />
  </FluxComponent>,
  document.getElementById('playground-container')
);
