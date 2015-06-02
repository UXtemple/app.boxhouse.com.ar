import DocAction from './action';
import DocHeader from './header';
import React from 'react';

export default class DocCardDoc extends React.Component {
  render() {
    return (
      <div style={style}>
        <DocHeader {...this.props} />
        <DocAction {...this.props} />
      </div>
    );
  }
}

const style = {
  background: 'white',
  borderRadius: 5,
  // color: 'white',
  width: '80%'
}
