import { Action } from 'panels-blocks';
import ArrowIcon from '../../icons/arrow';
import boxShape from '../shape';
import React, { PropTypes } from 'react';

export default class BoxCardAction {
  render() {
    const { documentCount, box } = this.props;

    return (
      <Action href={box.id} style={style.action}>
        <div style={style.documentCount.wrapper}>
          <div style={style.documentCount.number}>{documentCount}</div>
          <div style={style.documentCount.label}>documents inside</div>
        </div>
        <ArrowIcon />
      </Action>
    );
  }

  static defaultTypes = {
    documentCount: 0
  }

  static propTypes = {
    documentCount: PropTypes.number,
    box: boxShape.isRequired
  }
}


const style = {
  action: {
    active: {},
    base: {
      alignItems: 'center',
      padding: 25
    }
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