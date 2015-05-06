import Component from './component';
import FluxComponent from 'flummox/component';
import React from 'react';

export default class AppContainer extends React.Component {
  get stores() {
    return {
      doc: store => ({docs: store.all})
    };
  }

  render() {
    return <FluxComponent connectToStores={this.stores}><Component /></FluxComponent>;
  }
}
