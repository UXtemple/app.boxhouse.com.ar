import React from 'react';
import styles from './component-styles'
import { DateInput, TextInput } from './form';

export default class DocAdd extends React.Component {
  getValue(ref) {
    return React.findDOMNode(this.refs[ref].refs.input).value;
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.flux.getActions('doc').add({
      office: this.getValue('office'),
      type: this.getValue('type'),
      date: {
        from: this.getValue('date/from'),
        to: this.getValue('date/to')
      },
      number: {
        from: this.getValue('number/from'),
        to: this.getValue('number/to')
      },
      boxId: 1,
      companyId: 1
    });
  }

  render() {
    return (
      <form style={styles.form} onSubmit={this.onSubmit.bind(this)}>
        <TextInput label='Office name' ref='office' placeholder='Office' />
        <TextInput label='Type of document' ref='type' placeholder='Invoice' />

        <DateInput label='Date from' ref='date/from' />
        <DateInput label='Date to' ref='date/to' />

        <TextInput label='Number from' ref='number/from' />
        <TextInput label='Number to' ref='number/to' />

        <button type='submit' style={styles.add}>Add!</button>
      </form>
    );
  }
}
