import React, { Component, PropTypes } from 'react';

export default class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: `${props.label}-${new Date().getTime()}`
    }
  }

  render() {
    const { id } = this.state;
    const { disabled, label, value } = this.props;
    const fieldStyle = {
      ...style.field,
      ...this.props.style
    }

    const inputStyle = disabled ? style.value : {...style.value, ...style.valueEnabled};

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
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired
  }
}

const style = {
  field: {
    border: 0,
    margin: 0,
    padding: 0
  },
  label: {
    color: '#00bd70',
    display: 'block',
    fontSize: 12,
    fontWeight: 400,
    textTransform: 'uppercase'
  },
  value: {
    border: 'none',
    borderBottom: '1px solid transparent',
    borderBottomColor: 'transparent',
    color: '#7b7b7b',
    cursor: 'default',
    display: 'block',
    fontSize: 18,
    flexDirection: 'row',
    marginTop: 5,
    paddingLeft: 10,
    outline: 0,
    width: '100%'
  },
  valueEnabled: {
    borderBottomColor: 'rgba(0,189,112,0.3)',
    cursor: 'pointer'
  }
}
