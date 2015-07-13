import { actions as boxesActiveActions } from '../../../boxes-active';
import { ActionWithIcon } from 'panels-blocks';
import ArrowIcon from '../../icons/arrow';
import React from 'react';

export default class Action {
  render() {
    const { id } = this.props.box;
    const setActiveBox = () => this.props.dispatch(boxesActiveActions.set(id));

    return (
      <ActionWithIcon href={id} icon={ArrowIcon} style={style.action} onClick={setActiveBox}>
        <div style={style.documentCount.wrapper}>
          <div style={style.documentCount.number}>{this.props.documentCount}</div>
          <div style={style.documentCount.label}>documents inside</div>
        </div>
      </ActionWithIcon>
    );
  }
}


const style = {
  action: {
    action: {
      active: {},
      base: {
        alignItems: 'center',
        padding: 25
      }
    },
    icon: {}
  },
  documentCount: {
    number: {
      fontSize: 50,
      lineHeight: '50px'
    },
    label: {
      fontSize: 13,
      fontWeight: 300,
      textTransform: 'uppercase'
    },
    wrapper: {
      color: 'white',
      flexDirection: 'column',
      flex: 1
    }
  }
}
