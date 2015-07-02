import BoxAdd from './add';
import BoxSearch from './search';
import React from 'react';

export default class BoxTools extends React.Component {
  render() {
    return (
      <div style={style}>
        <BoxSearch {...this.props} />
        <BoxAdd {...this.props} />
      </div>
    );
  }
}

const style = {
  alignSelf: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '25px 0 25px 0',
  width: 80
}
