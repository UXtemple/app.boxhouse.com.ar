import Component from './component';
import FluxComponent from 'flummox/component';
import React from 'react';

export default class BoxesContainer extends React.Component {
  get stores() {
    return {
      box: store => ({boxes: store.companyId(this.props.companyId)})
    };
  }

  render() {
    return <FluxComponent flux={this.props.flux} connectToStores={this.stores}><Component panels={this.props.panels} /></FluxComponent>;
  }

  static propTypes = {
    companyId: React.PropTypes.string.isRequired
  }
}
