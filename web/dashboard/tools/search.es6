import React from 'react';
import SearchIcon from '../../icons/search';

export default class DashboardSearch extends React.Component  {
  render() {
    return <SearchIcon {...props} />;
  }
}

const props = {
  fill: {
    active: 'rgba(255, 255, 255, 0.3)',
    base: 'white'
  },
  height: 35,
  width: 35
};
