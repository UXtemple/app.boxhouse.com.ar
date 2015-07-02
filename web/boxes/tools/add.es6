import React from 'react';
import PlusIcon from '../../icons/plus';

export default class BoxAdd extends React.Component  {
  render() {
    return <PlusIcon {...iconProps} onClick={() => this.add({companyId: '1'})} />;
  }
}

const iconProps = {
  fill: {
    active: 'rgba(35, 31, 32, 0.3)',
    base: '#231f20'
  },
  height: 35,
  width: 35
};