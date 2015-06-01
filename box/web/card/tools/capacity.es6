import React from 'react';
import Switch from '../../../../switch';

export default class Capacity extends React.Component {
  constructor(props) {
    super(props);

    this.toggleFull = this.props.flux.getActions('box').toggleFull;
  }

  render() {
    return (
      <div style={{...style, ...this.props.style}} onClick={() => this.toggleFull(this.props.box.id)}>
        <Switch on={this.props.box.full} />
        <div>{this.props.box.full ? 'FULL' : 'FREE'}</div>
      </div>
    );
  }
}

const style = {
  cursor: 'pointer',
  fontSize: 15
}
