import { actions } from '../../docs';
import { connect } from 'redux/react';
import { listForBox } from '../../docs/getters';
import { Panel } from 'panels-ui';
import BoxPosition from '../boxes/position';
import boxShape from '../boxes/shape';
import docShape from './shape';
import List from './list';
import React, { PropTypes } from 'react';
import Tools from './tools';

@connect((state, {boxId}) => ({
  box: state.boxes[boxId],
  docs: listForBox(state.docs, boxId)
}))
export default class Docs {
  render() {
    const { box, boxId, dispatch, docs, width } = this.props;
    const addDoc = () => dispatch(actions.add({boxId}));

    return (
      <Panel style={style.panel} width={width}>
        <BoxPosition box={box} style={style.boxPosition} />
        <Tools addDoc={addDoc} />
        <List docs={docs} />
      </Panel>
    );
  }

  static propTypes = {
    box: boxShape.isRequired,
    boxId: PropTypes.string.isRequired,
    docs: PropTypes.arrayOf(docShape).isRequired
  }
}

const style = {
  panel: {
    backgroundColor: '#00bd70',
    paddingBottom: 100
  },
  boxPosition: {
    color: 'white',
    display: 'flex',
    fontSize: 25,
    justifyContent: 'center',
    margin: '25px 0 0 10px'
  }
};
