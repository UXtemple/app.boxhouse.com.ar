import React, { Component, PropTypes } from 'react';

export default class Field extends Component {
  render() {
    const { disabled, label, value } = this.props;
    const fieldStyle = {
      ...style.field,
      ...this.props.style
    }
    const id = `${label}-${new Date().getTime()}`;

    const inputStyle = style.value;
    if (disabled) {
      inputStyle.cursor = 'default';
    }

    return (
      <fieldset style={fieldStyle} disabled={disabled}>
        <label htmlFor={id} style={style.label}>{label}</label>
        <input id={id} name={label} defaultValue={value} style={inputStyle} />
      </fieldset>
    );
  }

  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    value: PropTypes.string.isRequired
  }
}

const style = {
  field: {
    border: 0,
    margin: 0,
    padding: 0
  },
  label: {
    color: 'green',
    display: 'block',
    fontSize: 14,
    textTransform: 'uppercase'
  },
  value: {
    border: 'none',
    color: 'black',
    display: 'block',
    fontSize: 22,
    flexDirection: 'row',
    marginTop: 10,
    outline: 0
  }
}
