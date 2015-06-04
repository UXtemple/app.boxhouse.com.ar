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
    return <FluxComponent connectToStores={this.stores}><Component /></FluxComponent>;
  }
}

BoxCardContainer.propTypes = {
  id: React.PropTypes.number.isRequired
}
