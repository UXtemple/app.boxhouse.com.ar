import { actions as boxesActions } from '../../../../boxes';
import { actions as docsActions } from '../../../../docs';
import Add from '../../../icons/plus';
import Capacity from './capacity';
import React from 'react';
import Remove from '../../../icons/delete';
import Separator from './separator';

export default class BoxTools {
  render() {
    const { box: {id}, dispatch } = this.props;

    return (
      <div style={style.tools}>
        <Remove style={style.tool} {...toolProps} onClick={() => dispatch(boxesActions.remove(id))} />
        <Separator />
        <Capacity style={style.tool} {...this.props} />
        <Separator />
        <Add style={style.tool} {...toolProps} onClick={() => dispatch(docsActions.add({boxId: id}))} />
      </div>
    );
  }
}

const style = {
  tools: {
    borderTop: '1px solid rgba(255,255,255,0.3)',
    margin: '0px 25px',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  tool: {
    //alignContent: 'center',
    alignItems: 'center',
    padding: '25px 0',
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
