import { ActionIconBlock } from 'panels-ui/blocks';
import ArrowIcon from '../../../icons/arrow';
import React from 'react';

export default class BoxAction extends React.Component {
  render() {
    return (
      <ActionIconBlock href={this.props.box.id} style={style.action} flux={this.props.flux} icon={ArrowIcon}>
        <div style={style.documentCount.wrapper}>
          <div style={style.documentCount.number}>{this.props.box.documentCount}</div>
          <div style={style.documentCount.label}>documents inside</div>
        </div>
      </ActionIconBlock>
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
      fontFamily: 'Roboto',
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
