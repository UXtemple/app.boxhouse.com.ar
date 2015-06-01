import React from 'react';
import PlusIcon from '../../../icons/plus';

export default class BoxAdd extends React.Component  {
  render() {
    return <PlusIcon {...props} />;
  }
}

const props = {
  fill: {
    active: '#00b3e3',
    base: '#231f20'
  },
  height: 35,
  width: 35
};
