import Component from './component';
import FluxComponent from 'flummox/component';
import React, { PropTypes } from 'react';

export default class CompanyCardContainer extends React.Component {
  get stores() {
    return {
      company: store => ({company: store.id(this.props.id)})
    };
  }

  render() {
    return <FluxComponent flux={this.props.flux} connectToStores={this.stores}><Component panels={this.props.panels} /></FluxComponent>;
  }

  static propTypes = {
    id: PropTypes.string.isRequired
  }
}
