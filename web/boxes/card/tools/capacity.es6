import boxShape from '../../shape';
import React, { PropTypes } from 'react';
import Switch from '../../../switch';

export default class Capacity {
  render() {
    const { box, toggleBoxFull } = this.props;

    return (
      <div style={{...style, ...this.props.style}} onClick={toggleBoxFull}>
        <Switch on={box.full} />
        <div>{box.full ? 'FULL' : 'FREE'}</div>
      </div>
    );
  }

  static propTypes = {
    box: boxShape.isRequired,
    toggleBoxFull: PropTypes.func.isRequired
  }
}

const style = {
  cursor: 'pointer',
  fontWeight: 400,
  fontSize: 12
};
