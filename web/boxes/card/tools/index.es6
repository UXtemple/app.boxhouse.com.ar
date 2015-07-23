import Add from '../../../icons/plus';
import boxShape from '../../shape';
import Capacity from './capacity';
import React, { PropTypes } from 'react';
import Remove from '../../../icons/delete';
import Separator from './separator';

export default class BoxTools {
  render() {
    const { addDoc, box, removeBox, toggleBoxFull } = this.props;

    return (
      <div style={style.tools}>
        <Remove style={style.tool} {...toolProps} onClick={removeBox} />
        <Separator />
        <Capacity style={style.tool} box={box} toggleBoxFull={toggleBoxFull} />
        <Separator />
        <Add style={style.tool} {...toolProps} onClick={addDoc} />
      </div>
    );
  }

  static propTypes = {
    addDoc: PropTypes.func.isRequired,
    box: boxShape.isRequired,
    removeBox: PropTypes.func.isRequired,
    toggleBoxFull: PropTypes.func.isRequired
  }
}

const style = {
  tools: {
    //borderTop: '1px solid rgba(255,255,255,0.3)',
    margin: '0px 5px',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  tool: {
    //alignContent: 'center',
    alignItems: 'center',
    padding: '20px 0px',
    width: '30%'
  }
}

const toolProps = {
  fill: {
    active: 'rgba(255,255,255,0.5)',
    base: 'white'
  },
  height: 35,
  width: 35
};
