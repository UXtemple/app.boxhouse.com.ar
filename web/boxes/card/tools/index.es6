import Add from './add';
import Capacity from './capacity';
import Delete from './delete';
import Separator from './separator';
import React from 'react';

export default class BoxTools {
  render() {
    return (
      <div style={style.tools}>
        <Delete style={style.tool} {...this.props} />
        <Separator />
        <Capacity style={style.tool} {...this.props} />
        <Separator />
        <Add style={style.tool} {...this.props} />
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
