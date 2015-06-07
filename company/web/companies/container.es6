import Component from './component';
import FluxComponent from 'flummox/component';
import React from 'react';

export default class CompaniesContainer extends React.Component {
  get stores() {
    return {
      company: store => ({companies: store.all})
    };
  }

  render() {
    return <FluxComponent flux={this.props.flux} connectToStores={this.stores}><Component panels={this.props.panels} /></FluxComponent>;
  }
}
