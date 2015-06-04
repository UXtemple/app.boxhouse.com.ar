import Component from './component';
import FluxComponent from 'flummox/component';
import React from 'react';

export default class CompanyCardContainer extends React.Component {
  get stores() {
    return {
      company: store => ({company: store.id(this.props.id)})
    };
  }

  render() {
    return <FluxComponent flux={this.props.flux} connectToStores={this.stores}><Component /></FluxComponent>;
  }
}

CompanyCardContainer.propTypes = {
  id: React.PropTypes.number.isRequired
}
