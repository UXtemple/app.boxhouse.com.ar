import React from 'react';
import PlusIcon from '../../icons/plus';

export default class DashboardAdd {
  render() {
    return <PlusIcon {...iconProps} onClick={() => this.add({})} />;
  }
}

const iconProps = {
  fill: {
    active: 'rgba(255, 255, 255, 0.3)',
    base: 'white'
  },
  height: 35,
  width: 35
};
