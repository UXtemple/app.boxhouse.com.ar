import Component from './component';
import FluxComponent from 'flummox/component/web';
import React from 'react';

export default class DocContainer extends React.Component {
  get stores() {
    return {
      doc: store => ({doc: store.id(this.props.id)})
    };
  }

  render() {
    return <FluxComponent connectToStores={this.stores}><Component /></FluxComponent>;
  }
}
