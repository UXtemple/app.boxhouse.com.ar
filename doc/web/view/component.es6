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
      border: 'none',
      outline: 0
    },
    saved: {
      border: 'none',
      outline: 0
    }
  }
}
