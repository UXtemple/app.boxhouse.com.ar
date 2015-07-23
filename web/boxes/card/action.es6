import { Action } from 'panels-blocks';
import boxShape from '../shape';
import React, { PropTypes } from 'react';

export default class BoxCardAction {
  render() {
    const { documentCount, box } = this.props;

    return (
      <Action href={box.id} style={style.action}>
        <div style={style.open.wrapper}>
          <div style={style.open.button}>OPEN</div>
          <div style={style.open.count}>1000 doc's inside</div>
        </div>
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
      padding: '40px 20px 30px 20px'
    }
  },
  open: {
    button: {
      background: 'none',
      borderColor: 'white',
      borderRadius: 15,
      borderStyle: 'solid',
      borderWidth: 2,
      fontSize: 12,
      fontWeight: 400,
      height: 30,
      padding: '4px 0',
      textAlign: 'center',
      width: 60
    },
    count: {
      fontSize: 12,
      fontWeight: 400,
      textTransform: 'uppercase',
      marginTop: 10
    },
    wrapper: {
      alignItems: 'center',
      color: 'white',
      flexDirection: 'column',
      flex: 1
    }
  }
}
