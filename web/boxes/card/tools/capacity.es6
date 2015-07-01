import React from 'react';
import Switch from '../../../switch';

export default class Capacity {
  render() {
    return (
      <div style={{...style, ...this.props.style}} onClick={() => this.props.toggleFull(this.props.box.id)}>
        <Switch on={this.props.box.full} />
        <div>{this.props.box.full ? 'FULL' : 'FREE'}</div>
      </div>
    );
  }
}

const style = {
  cursor: 'pointer',
  fontWeight: 300,
  fontSize: 13
};
