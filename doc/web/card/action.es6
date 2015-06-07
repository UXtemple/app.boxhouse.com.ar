import { ActionIconBlock } from 'panels-ui/blocks';
import ArrowIcon from '../../../icons/arrow';
import React from 'react';

export default class DocAction extends React.Component {
  render() {
    return (
      <ActionIconBlock href={this.props.doc.id} style={style.action} panels={this.props.panels} icon={ArrowIcon}>
        <div style={style.content.wrapper}>
          <div style={style.content.heading}>{this.props.doc.type}</div>
          <div style={style.content.facet}>{this.props.doc.date.from} - {this.props.doc.date.to}</div>
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
        padding: '15px 15px 15px 50px'
      }
    },
    icon: {
      active: {
        fill: '#323232'
      },
      base: {
        fill: '#323232'
      }
    }
  },
  content: {
    heading: {
      fontSize: 25
    },
    facet: {
      fontSize: 15,
      fontWeight: 400,
      flexDirection: 'row',
      marginTop: 10
    },
    wrapper: {
      color: '#323232',
      flexDirection: 'column',
      flex: 1
    }
  }
}
