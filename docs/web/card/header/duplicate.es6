import DuplicateIcon from '../../../../icons/duplicate';
import React from 'react';

export default class Add extends React.Component  {
  render() {
    return <DuplicateIcon style={this.props.style} {...props} />;
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
