import React from 'react';
import styles from './component-styles'

export default class DocAdd extends React.Component {
  render() {
    return (
      <form style={styles.form}>
        <input name='office' placeholder='Office' />
        <br />
        <input name='type' placeholder='Invoice' />
        <br />
        <div>Date</div>
        <input name='date/from' type='date' placeholder='From' />
        <br />
        <input name='date/to' type='date' placeholder='To' />
        <br />
        <div>Number</div>
        <input name='number/from' placeholder='From' />
        <br />
        <input name='number/to' placeholder='To' />
        <br />
        <button type='submit' style={styles.add}>Add!</button>
      </form>
    );
  }
}
