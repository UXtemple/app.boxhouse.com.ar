import * as Boxhouse from '../../index';
import * as PanelsApp from 'panels-app';

import BOX_DUMMY_DATA from '../../box/dummy-data';
import COMPANY_DUMMY_DATA from '../../company/dummy-data';
import DOC_DUMMY_DATA from '../../doc/dummy-data';
import FluxComponent from 'flummox/component';

import appPanel from '../../app/panel.json';
import appTypes from '../../app/types';
import boxPanel from '../../box/panel.json';
import boxTypes from '../../box/types';
import companyPanel from '../../company/panel.json';
import companyTypes from '../../company/types';
import dashboardPanel from '../../dashboard/panel.json';
import dashboardTypes from '../../dashboard/types';
import docPanel from '../../doc/panel.json';
import docTypes from '../../doc/types';

import PanelsContainer from 'panels-app/panels/container';
import React from 'react';

const flux = new PanelsApp.Flux();

flux.getActions('panels').load([
  appPanel,
  boxPanel,
  companyPanel,
  docPanel,
  dashboardPanel
]);
flux.getActions('types').load([
  ...appTypes,
  ...boxTypes,
  ...companyTypes,
  ...dashboardTypes,
  ...docTypes
]);
flux.getActions('router').navigate(location.href);

// {
//   app: "app.boxhouse.com",
//   flux: Boxhouse.App.Flux,
//   init(flux) {
//     flux.getActions('box').loadBoxes(BOX_DUMMY_DATA);
//     flux.getActions('company').loadCompanies(COMPANY_DUMMY_DATA);
//     flux.getActions('doc').loadDocs(DOC_DUMMY_DATA);
//   }
// }
flux.createContext(appPanel.app, Boxhouse.App.Flux, flux => {
  flux.getActions('box').loadBoxes(BOX_DUMMY_DATA);
  flux.getActions('company').loadCompanies(COMPANY_DUMMY_DATA);
  flux.getActions('doc').loadDocs(DOC_DUMMY_DATA);
});

flux.createContext(dashboardPanel.app, Boxhouse.Dashboard.Flux, flux => {
  flux.getActions('company').loadCompanies(COMPANY_DUMMY_DATA);
});

React.render(
  <FluxComponent flux={flux}>
    <PanelsContainer />
  </FluxComponent>,
  document.getElementById('playground-container')
);

let Playground = {
  boxhouse: flux.getContext('app.boxhouse.com'),
  flux
};
window.Playground = Playground;

console.log('Welcome to boxhouse playground.');
console.log('https://boxhouse.uxtemple.com');
console.log('Playground module', Playground);
