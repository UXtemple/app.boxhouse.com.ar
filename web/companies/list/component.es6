import CompanyCard from '../card';
import React, { Component, PropTypes } from 'react';

export default class Companies extends Component {
  render() {
    let companies = this.props.companies.map(({id}) => <CompanyCard key={id} id={id} />);

    return <div style={{width: '100%'}}>{companies}</div>;
  }

  static propTypes = {
    // companies:
  }
}
