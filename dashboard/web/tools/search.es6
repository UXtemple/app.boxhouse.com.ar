import React from 'react';
import SearchIcon from '../../../icons/search';

export default class DashboardSearch extends React.Component  {
  render() {
    return <SearchIcon {...props} />;
  }
}

const props = {
  fill: {
    active: 'rgba(35, 31, 32, 0.3)',
    base: '#231f20'
  },
  height: 35,
  width: 35
};
