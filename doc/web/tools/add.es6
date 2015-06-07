import React from 'react';
import PlusIcon from '../../../icons/plus';

export default class DocAdd extends React.Component  {
  constructor(props) {
    super(props);
    this.add = props.flux.getActions('doc').add;
  }

  render() {
    return <PlusIcon {...iconProps} onClick={() => this.add({boxId: this.props.boxId})}/>;
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
