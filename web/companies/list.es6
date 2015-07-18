import Card from './card';
import companyShape from '../company/shape';
import React, { PropTypes } from 'react';

export default class Companies {
  render() {
    let companies = this.props.companies.map(company => <Card key={company.id} company={company} />);

    return <div style={{width: '100%'}}>{companies}</div>;
  }

  static propTypes = {
    companies: PropTypes.arrayOf(companyShape).isRequired
  }
}
