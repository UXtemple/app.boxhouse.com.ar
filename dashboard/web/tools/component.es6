import DashboardAdd from './add';
import DashboardSearch from './search';
import React, { Component } from 'react';

export default class DashboardTools extends Component {
  render() {
    return (
      <div style={style}>
        <DashboardSearch {...this.props} />
        <DashboardAdd {...this.props} />
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
