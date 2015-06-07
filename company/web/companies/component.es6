import { CompanyRecord } from '../../records';
import CompanyCard from '../card/container';
import React, { Component, PropTypes } from 'react';

export default class Companies extends Component {
  render() {
    let companies = this.props.companies.map(({id}) => <CompanyCard key={id} id={id} panels={this.props.panels} />);

    return <div style={{width: '100%'}}>{companies}</div>;
  }

  static propTypes = {
    companies: React.PropTypes.arrayOf(CompanyRecord) //.isRequired
  }
}
