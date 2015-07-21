import docShape from '../../docs/shape';
import Fields from './fields';
import HeaderTitle from '../../docs/card/header/title';
import React, { Component } from 'react';

export default class DocView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true
    }
  }

  render() {
    const { disabled } = this.state;
    const { doc } = this.props;
    const toggleDisabled = () => this.setState({disabled: !disabled});

    return (
      <div style={{width: '100%'}}>
        <div style={{flexDirection: 'row', alignItems: 'center', margin: '25px 20px 0'}}>
          <HeaderTitle style={{flex: 1, textAlign: 'center', marginLeft: 70}} />
          <button style={style.button[disabled ? 'editable' : 'saved']} onClick={toggleDisabled}>
            {disabled ? 'edit' : 'save'}
          </button>
        </div>
        <Fields disabled={disabled} doc={doc} />
      </div>
    );
  }

  static propTypes = {
    doc: docShape.isRequired
  }
}

const style = {
  button: {
    editable: {
      background: 'none',
      borderColor: '#00bd70',
      borderRadius: 15,
      borderStyle: 'solid',
      borderWidth: 2,
      color: '#00bd70',
      fontSize: 12,
      fontWeight: 400,
      height: 30,
      outline: 0,
      textTransform: 'uppercase',
      width: 60
    },
    saved: {
      background: '#00bd70',
      borderStyle: 'solid',
      borderColor: '#00bd70',
      borderWidth: 1.5,
      borderRadius: 15,
      color: 'white',
      fontSize: 12,
      fontWeight: 400,
      height: 30,
      outline: 0,
      textTransform: 'uppercase',
      width: 60
    }
  }
}
