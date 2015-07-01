import { ActionWithIconBlock } from 'panels-blocks';
import ArrowIcon from '../../icons/arrow';
import React from 'react';

export default class Action {
  render() {
    return (
      <ActionWithIconBlock href={this.props.box.id} icon={ArrowIcon} style={style.action}>
        <div style={style.documentCount.wrapper}>
          <div style={style.documentCount.number}>{this.props.box.documentCount}</div>
          <div style={style.documentCount.label}>documents inside</div>
        </div>
      </ActionWithIconBlock>
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
