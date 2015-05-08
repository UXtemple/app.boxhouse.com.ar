import Component from './component';
import FluxComponent from 'flummox/component';
import React from 'react';

export default class DocContainer extends React.Component {
  get stores() {
    return {
      doc: store => ({docs: store.boxId(this.props.boxId)})
    };
  }

  render() {
    return <FluxComponent connectToStores={this.stores}><Component /></FluxComponent>;
  }
}
