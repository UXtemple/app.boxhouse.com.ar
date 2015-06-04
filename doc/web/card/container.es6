import Component from './component';
import FluxComponent from 'flummox/component';
import React from 'react';

export default class DocCardContainer extends React.Component {
  get stores() {
    return {
      doc: store => ({doc: store.id(this.props.id)})
    };
  }

  render() {
    return <FluxComponent flux={this.props.flux} connectToStores={this.stores}><Component /></FluxComponent>;
  }
}

DocCardContainer.propTypes = {
  id: React.PropTypes.number.isRequired
}
