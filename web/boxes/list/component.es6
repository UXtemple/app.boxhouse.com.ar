import boxShape from '../shape';
import BoxCard from '../card';
import React, { PropTypes } from 'react';

export default class Boxes {
  render() {
    const boxes = this.props.boxes.map(({id}) => <BoxCard key={id} id={id} />);

    return <div style={style}>{boxes}</div>;
  }

  static propTypes = {
    boxes: PropTypes.arrayOf(boxShape).isRequired
  }
}

const style = {
  width: '100%'
};
