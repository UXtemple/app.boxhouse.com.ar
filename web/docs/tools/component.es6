import DocAdd from './add';
import DocSearch from './search';
import React from 'react';

export default class DocsTools extends React.Component {
  render() {
    return (
      <div style={style}>
        <DocSearch {...this.props} />
        <DocAdd {...this.props} />
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
