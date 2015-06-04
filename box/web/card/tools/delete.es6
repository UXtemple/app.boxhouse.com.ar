import DeleteIcon from '../../../../icons/delete';
import React from 'react';

export default class Delete extends React.Component  {
  render() {
    return <DeleteIcon style={this.props.style} {...props} />;
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
