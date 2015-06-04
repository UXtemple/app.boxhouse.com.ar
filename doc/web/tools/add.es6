import React from 'react';
import PlusIcon from '../../../icons/plus';

export default class DocAdd extends React.Component  {
  render() {
    return <PlusIcon {...props} />;
  }
}

const props = {
  fill: {
    active: 'rgba(255, 255, 255, 0.3)',
    base: 'white'
  },
  height: 35,
  width: 35
};
