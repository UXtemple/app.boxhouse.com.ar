import { ActionBlock } from 'panels-ui/blocks';
import React from 'react';
import ArrowIcon from '../../../icons/arrow';



export default class BoxAction extends React.Component {
  render() {
    return (
      <ActionBlock href={this.props.box.id} style={style.action} flux={this.props.flux}>
        <div style={style.documentCount.wrapper}>
          <div style={style.documentCount.number}>{this.props.box.documentCount}</div>
          <div style={style.documentCount.label}>documents inside</div>
        </div>
        <ArrowIcon style={style.arrow} />
      </ActionBlock>
    );
  }
}


const style = {
  action: {
    base: {
      alignItems: 'center',
      flexDirection: 'row',
      padding: '25px 35px 25px 25px'
    },
    active: {
    }
  },
  arrow: {
    height: 30,
    width: 30
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
