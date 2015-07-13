import { actions } from '../../boxes';
import Add from '../icons/plus';
import Search from '../icons/search';
import React from 'react';

export default class BoxesTools {
  render() {
    const { dispatch } = this.props;

    return (
      <div style={style}>
        <Search style={style.tool} {...toolProps} />
        <Add style={style.tool} {...toolProps} onClick={() => dispatch(actions.add())} />
      </div>
    );
  }
}

const style = {
  alignSelf: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '25px 0 25px 0',
  width: 80
}

const toolProps = {
  fill: {
    active: 'rgba(35, 31, 32, 0.3)',
    base: '#231f20'
  },
  height: 35,
  width: 35
};
