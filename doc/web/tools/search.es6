import React from 'react';
import SearchIcon from '../../../icons/search';

export default class DocSearch extends React.Component  {
  render() {
    return <SearchIcon {...props} />;
  }
}

const props = {
  fill: {
    active: '#00b3e3',
    base: '#231f20'
  },
  height: 35,
  width: 35
};
