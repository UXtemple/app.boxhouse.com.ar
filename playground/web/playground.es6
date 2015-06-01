import { Panels } from 'panels-ui';
import * as Boxhouse from '../../index';
import BOX_DUMMY_DATA from '../../box/dummy-data';
import BoxesPanel from './boxes-panel';
import COMPANY_DUMMY_DATA from '../../company/dummy-data';
import DOC_DUMMY_DATA from '../../doc/dummy-data';
import DocsPanel from './docs-panel';
import FluxComponent from 'flummox/component';
import React from 'react';

const flux = new Boxhouse.App.Flux();

flux.getActions('box').loadBoxes(BOX_DUMMY_DATA);
flux.getActions('company').loadCompanies(COMPANY_DUMMY_DATA);
flux.getActions('doc').loadDocs(DOC_DUMMY_DATA);

React.render(
  <FluxComponent flux={flux}>
    <Panels>
      <BoxesPanel flux={flux} />
      <DocsPanel flux={flux} boxId={1} />
    </Panels>
  </FluxComponent>,
  document.getElementById('playground-container')
);

let Playground = {
  Boxhouse,
  flux
};
window.Playground = Playground;

console.log('Welcome to boxhouse playground.');
console.log('https://boxhouse.uxtemple.com');
console.log('Playground module', Playground);
