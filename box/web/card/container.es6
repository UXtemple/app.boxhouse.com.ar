import Component from './component';
import FluxComponent from 'flummox/component';
import React from 'react';

export default class BoxCardContainer extends React.Component {
  get stores() {
    return {
      box: store => ({box: store.id(this.props.id)})
    };
  }

  render() {
    return <FluxComponent connectToStores={this.stores}><Component panels={this.props.panels} /></FluxComponent>;
  }

  static propTypes = {
    id: React.PropTypes.string.isRequired
  }
}
