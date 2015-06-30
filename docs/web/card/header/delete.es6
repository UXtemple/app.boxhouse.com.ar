import DeleteIcon from '../../../../icons/delete';
import React from 'react';

export default class Delete extends React.Component  {
  render() {
    return <DeleteIcon style={this.props.style} {...props} />;
  }
}

const props = {
  fill: {
    active: 'rgba(0, 189, 112, 0.5)',
    base: '#00bd70'
  },
  height: 35,
  width: 35
};
