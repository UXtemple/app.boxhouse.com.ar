import React from 'react';

const styles = {
};

export default class DateInput extends React.Component {
  render() {
    return (
      <fieldset>
        <label>{this.props.label}</label>
        <input type='date' ref='input' />
      </fieldset>
    );
  }
}

DateInput.propTypes = {
  label: React.PropTypes.string.isRequired
}
