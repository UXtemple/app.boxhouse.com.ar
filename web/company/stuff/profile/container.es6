import Component from './component';
import FluxComponent from 'flummox/component';
import React from 'react';

export default class CompanyProfileContainer extends React.Component {
  get stores() {
    return {
      company: store => ({company: store.id(this.props.id)})
    };
  }

  render() {
    return <FluxComponent flux={this.props.flux} connectToStores={this.stores}><Component /></FluxComponent>;
  }

  static propTypes = {
    id: React.PropTypes.string.isRequired
  }
}
