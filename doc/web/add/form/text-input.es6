import React from 'react';

const styles = {
};

export default class TextInput extends React.Component {
  render() {
    return (
      <fieldset>
        <label>{this.props.label}</label>
        <input ref='input' placeholder={this.props.placeholder} />
      </fieldset>
    );
  }
}

TextInput.propTypes = {
  label: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string
}
