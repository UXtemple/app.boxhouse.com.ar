import Component from './component';
import FluxComponent from 'flummox/component';
import React from 'react';

export default class BoxPositionContainer extends React.Component {
  get stores() {
    return {
      box: store => ({box: store.id(this.props.id)})
    };
  }

  render() {
    return <FluxComponent flux={this.props.flux} connectToStores={this.stores}><Component {...this.props} /></FluxComponent>;
  }

  static propTypes = {
    id: React.PropTypes.string.isRequired
  }
}
