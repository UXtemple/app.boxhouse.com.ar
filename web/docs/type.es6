import { Panel } from 'panels-ui';
import { actions as boxesActiveActions } from '../../boxes-active';
import BoxPosition from '../boxes/position';
import List from './list';
import React, { PropTypes } from 'react';
import Tools from './tools';

export default class Docs {
  render() {
    const { boxId } = this.props;
    const { redux: { dispatch } } = this.context;

    return (
      <Panel style={style.panel}>
        <BoxPosition style={style.boxPosition} id={boxId} />
        <Tools boxId={boxId} dispatch={dispatch} />
        <List boxId={boxId} />
      </Panel>
    );
  }

  componentDidMount() {
    this.context.redux.dispatch(boxesActiveActions.set(this.props.boxId));
  }

  static contextTypes = {
    redux: PropTypes.shape({
      dispatch: PropTypes.func.isRequired
    }).isRequired
  }
}

const style = {
  panel: {
    backgroundColor: '#00bd70',
    paddingBottom: 100
  },
  boxPosition: {
    color: 'white',
    fontSize: 30,
    justifyContent: 'center',
    marginTop: 25
  }
};
