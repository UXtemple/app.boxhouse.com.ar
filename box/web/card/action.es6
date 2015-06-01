import { ActionBlock } from 'panels-ui/blocks';
import React from 'react';

export default class BoxAction extends React.Component {
  render() {
    return (
      <ActionBlock href={this.props.box.id} style={style.action}>
        <div style={style.documentCount.wrapper}>
          <div style={style.documentCount.number}>{this.props.box.documentCount}</div>
          <div style={style.documentCount.label}>documents inside</div>
        </div>
        <div style={style.arrow}>
          <div>></div>
        </div>
      </ActionBlock>
    );
  }
}


const style = {
  action: {
    base: {
      flexDirection: 'row',
      padding: 25
    },
    active: {
    }
  },
  arrow: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  documentCount: {
    number: {
      fontSize: 50,
      lineHeight: '50px',
    },
    label: {
      fontSize: 15,
      textTransform: 'uppercase',
    },
    wrapper: {
      color: 'white',
      flexDirection: 'column',
      flex: 1
    }
  }
}
