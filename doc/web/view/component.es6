import { DocRecord } from '../../records';
import Fields from './fields';
import React, { Component, PropTypes } from 'react';

export default class DocView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true
    }
  }

  render() {
    const { disabled } = this.state;
    const buttonWord = disabled ? 'edit' : 'save';
    return (
      <div>
        <button style={style.button[disabled ? 'editable' : 'saved']}
          onClick={() => this.setState({disabled: !disabled})}>
          {buttonWord}</button>
        <Fields disabled={disabled} doc={this.props.doc} />
      </div>
    );
  }

  static propTypes = {
    doc: PropTypes.arrayOf(DocRecord) //.isRequired
  }
}

const style = {
  button: {
    editable: {
      background: 'none',
      borderColor: '#00bd70',
      borderRadius: 20,
      borderStyle: 'solid',
      borderWidth: 1,
      color: '#00bd70',
      outline: 0,
      textTransform: 'uppercase'
    },
    saved: {
      background: '#00bd70',
      borderStyle: 'solid',
      borderColor: '#00bd70',
      borderWidth: 1,
      borderRadius: 20,
      color: 'white',
      outline: 0,
      textTransform: 'uppercase'
    }
  }
}
