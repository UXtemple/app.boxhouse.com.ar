import Component from './component';
import FluxComponent from 'flummox/component';
import React from 'react';

export default class DocsContainer extends React.Component {
  get stores() {
    return {
      doc: store => ({docs: store.boxId(this.props.boxId)})
    };
  }

  render() {
    return <FluxComponent flux={this.props.flux} connectToStores={this.stores}><Component {...this.props} /></FluxComponent>;
  }
}
