import Component from './component';
import FluxComponent from 'flummox/component';
import React from 'react';

export default class BoxesFeedContainer extends React.Component {
  get stores() {
    return {
      box: store => ({boxes: store.companyId(this.props.companyId)})
    };
  }

  render() {
    return <FluxComponent connectToStores={this.stores}><Component /></FluxComponent>;
  }
}

BoxesFeedContainer.propTypes = {
  companyId: React.PropTypes.number.isRequired
}
