import boxShape from './shape';
import Card from './card';
import React, { PropTypes } from 'react';

export default class Boxes {
  render() {
    const { addDoc, removeBox, toggleBoxFull } = this.props;
    const boxes = this.props.boxes.map(box =>
      <Card key={box.id} addDoc={addDoc(box.id)} box={box} removeBox={removeBox(box.id)} toggleBoxFull={toggleBoxFull(box.id)} />);

    return <div style={style}>{boxes}</div>;
  }

  static propTypes = {
    addDoc: PropTypes.func.isRequired,
    boxes: PropTypes.arrayOf(boxShape).isRequired,
    removeBox: PropTypes.func.isRequired
  }
}

const style = {
  width: '100%'
};
