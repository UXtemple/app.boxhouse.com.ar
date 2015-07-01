import PlusIcon from '../../../icons/plus';
import React from 'react';

export default class Add {
  render() {
    return <PlusIcon style={this.props.style} {...props} />;
  }
}

const props = {
  fill: {
    active: 'rgba(255,255,255,0.5)',
    base: 'white'
  },
  height: 35,
  width: 35
};
